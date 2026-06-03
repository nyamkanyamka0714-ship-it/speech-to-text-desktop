// Speech Recognition API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// DOM Elements
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const clearBtn = document.getElementById('clearBtn');
const transcriptDiv = document.getElementById('transcript');
const interimDiv = document.getElementById('interim');
const statusDiv = document.getElementById('status');
const confidenceDiv = document.getElementById('confidence');
const languageSelect = document.getElementById('language');

// Variables
let finalTranscript = '';
let isListening = false;

// Configuration
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'mn-MN';

// Error messages
const errorMessages = {
  'no-speech': '❌ Та ямар ч үг хэлсэнгүй. Дахин оролдоно уу.',
  'audio-capture': '🎤 Микрофон олдсонгүй. Зөвшөөрөл өгнө үү.',
  'network': '🌐 Сүлжээний алдаа. Интернет холболтыг шалгана уу.',
  'not-allowed': '🔒 Микрофон ашиглахын зөвшөөрөл дутсан.',
  'service-not-allowed': '🔒 Үг оноохо үйлчилгээ боломжгүй.',
  'bad-grammar': '⚠️ Үгнийг оноолсонгүй. Дахин оролдоно уу.',
  'network-timeout': '⏱️ Сүлжээ татай болсон.',
  'default': '❌ Алдаа гарлаа'
};

// Language change
languageSelect.addEventListener('change', (e) => {
  recognition.lang = e.target.value;
  console.log('🌐 Language:', e.target.value);
});

// Start button
startBtn.addEventListener('click', () => {
  if (isListening) return;
  finalTranscript = '';
  isListening = true;
  
  try {
    recognition.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
    statusDiv.textContent = '🎙️ Сонсож байна...';
    statusDiv.classList.remove('processing', 'error');
    statusDiv.classList.add('listening');
    transcriptDiv.textContent = '';
    interimDiv.textContent = '';
    confidenceDiv.textContent = '';
    console.log('✅ Started');
  } catch (error) {
    console.error('Error:', error);
    statusDiv.textContent = '❌ Өөр жишээ ажиллаж байна';
    statusDiv.classList.add('error');
  }
});

// Stop button
stopBtn.addEventListener('click', () => {
  recognition.stop();
  isListening = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  statusDiv.textContent = '⏸️ Зогсоосон';
  statusDiv.classList.remove('listening', 'processing');
  console.log('⏹️ Stopped');
});

// Clear button
clearBtn.addEventListener('click', () => {
  finalTranscript = '';
  transcriptDiv.textContent = '';
  interimDiv.textContent = '';
  confidenceDiv.textContent = '';
  statusDiv.textContent = '🗑️ Цэвэрлэгдсэн';
  statusDiv.classList.remove('listening', 'processing', 'error');
  console.log('🗑️ Cleared');
});

// Results
recognition.onresult = (event) => {
  let interimTranscript = '';
  let maxConfidence = 0;

  for (let i = event.resultIndex; i < event.results.length; i++) {
    const transcript = event.results[i][0].transcript;
    const confidence = event.results[i][0].confidence;

    if (confidence > maxConfidence) {
      maxConfidence = confidence;
    }

    if (event.results[i].isFinal) {
      finalTranscript += transcript + ' ';
    } else {
      interimTranscript += transcript;
    }
  }

  transcriptDiv.textContent = finalTranscript;
  interimDiv.textContent = interimTranscript;

  if (maxConfidence > 0) {
    const percent = Math.round(maxConfidence * 100);
    const bar = '█'.repeat(Math.round(percent / 10)).padEnd(10, '░');
    confidenceDiv.textContent = `Итгэлцүүр: ${percent}% [${bar}]`;
  }

  if (interimTranscript) {
    statusDiv.classList.add('processing');
  }

  console.log('Final:', finalTranscript);
  console.log('Interim:', interimTranscript);
};

// Errors
recognition.onerror = (event) => {
  const message = errorMessages[event.error] || errorMessages['default'];
  statusDiv.textContent = message;
  statusDiv.classList.remove('listening', 'processing');
  statusDiv.classList.add('error');
  console.error('Error:', event.error);
};

// End
recognition.onend = () => {
  console.log('Ended');
  isListening = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  statusDiv.classList.remove('listening', 'processing');

  if (finalTranscript.trim()) {
    statusDiv.textContent = '✅ Дуусчээ';
  } else {
    statusDiv.textContent = '🔄 Бэлэн байна';
  }
};

// Copy to clipboard
transcriptDiv.addEventListener('dblclick', () => {
  if (finalTranscript.trim()) {
    navigator.clipboard.writeText(finalTranscript.trim()).then(() => {
      console.log('📋 Copied');
      const originalText = transcriptDiv.textContent;
      transcriptDiv.textContent = '✅ Хуулсан!';
      transcriptDiv.style.background = '#e8f5e9';

      setTimeout(() => {
        transcriptDiv.textContent = originalText;
        transcriptDiv.style.background = '#f9f9f9';
      }, 1500);
    }).catch((err) => {
      console.error('Copy error:', err);
    });
  }
});

// Check compatibility
window.addEventListener('load', () => {
  if (!SpeechRecognition) {
    statusDiv.textContent = '❌ Таны хөтөч үг оноохоо дэмжхэхгүй';
    statusDiv.classList.add('error');
    startBtn.disabled = true;
    console.error('Speech Recognition not supported');
  } else {
    console.log('✅ Ready');
    statusDiv.textContent = '✅ Бэлэн байна';
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    if (!startBtn.disabled) {
      startBtn.click();
    } else if (!stopBtn.disabled) {
      stopBtn.click();
    }
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
    e.preventDefault();
    clearBtn.click();
  }
});

console.log('🚀 Speech to Text Desktop App v1.0.0');
