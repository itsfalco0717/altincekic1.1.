// ══════════════════════════════════════════════════
//  STORAGE
// ══════════════════════════════════════════════════
const DB = {
  get: k => {
    try { return JSON.parse(localStorage.getItem(k)) } catch { return null }
  },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v))
};

const K = {
  USERS: 'ac2_users',
  SESSION: 'ac2_session',
  AUCTIONS: 'ac2_auctions',
  STATS: 'ac2_stats',
  PENDING: 'ac2_pending'
};

// ══════════════════════════════════════════════════
//  PHONE PRICING DATABASE (2. El)
// ══════════════════════════════════════════════════
const PHONE_PRICES = {
  'Apple': {
    'iPhone 6': { fast: [2000, 2500], normal: [1800, 2000], slow: [1500, 1800] },
    'iPhone 6s': { fast: [3000, 3500], normal: [2500, 3000], slow: [2000, 2500] },
    'iPhone 7': { fast: [4000, 5000], normal: [3500, 4000], slow: [3000, 3500] },
    'iPhone 7 Plus': { fast: [5000, 6000], normal: [4500, 5000], slow: [4000, 4500] },
    'iPhone 8': { fast: [6000, 7000], normal: [5500, 6000], slow: [5000, 5500] },
    'iPhone X': { fast: [8000, 10000], normal: [7000, 8000], slow: [6000, 7000] },
    'iPhone XR': { fast: [10000, 12000], normal: [9000, 10000], slow: [8000, 9000] },
    'iPhone XS / XS Max': { fast: [10000, 13000], normal: [9000, 10000], slow: [8000, 9000] },
    'iPhone 11': { fast: [12000, 16000], normal: [10000, 12000], slow: [9000, 10000] },
    'iPhone 11 Pro / Pro Max': { fast: [14000, 20000], normal: [12000, 14000], slow: [10000, 12000] },
    'iPhone 12 / 12 Mini': { fast: [14000, 18000], normal: [12000, 14000], slow: [10000, 12000] },
    'iPhone 12 Pro / Pro Max': { fast: [16000, 22000], normal: [14000, 16000], slow: [12000, 14000] },
    'iPhone 13 / 13 Mini': { fast: [20000, 28000], normal: [18000, 20000], slow: [15000, 18000] },
    'iPhone 13 Pro / Pro Max': { fast: [25000, 35000], normal: [22000, 25000], slow: [18000, 22000] },
    'iPhone 14 / 14 Plus': { fast: [28000, 38000], normal: [24000, 28000], slow: [20000, 24000] },
    'iPhone 14 Pro / Pro Max': { fast: [35000, 50000], normal: [30000, 35000], slow: [25000, 30000] },
    'iPhone 15 / 15 Plus': { fast: [35000, 52000], normal: [30000, 35000], slow: [26000, 30000] },
    'iPhone 15 Pro / Pro Max': { fast: [48000, 75000], normal: [40000, 48000], slow: [34000, 40000] },
    'iPhone 16 / 16 Pro': { fast: [60000, 95000], normal: [50000, 60000], slow: [40000, 50000] },
    'iPhone 17 / 17 Pro': { fast: [80000, 120000], normal: [70000, 80000], slow: [60000, 70000] }
  },
  'Samsung': {
    'Galaxy A20 / A21 / A30': { fast: [4000, 6000], normal: [3000, 4000], slow: [2000, 3000] },
    'Galaxy A32 / A33': { fast: [7000, 10000], normal: [6000, 7000], slow: [5000, 6000] },
    'Galaxy A35': { fast: [12000, 15000], normal: [10000, 12000], slow: [8000, 10000] },
    'Galaxy A36 5G': { fast: [15000, 19000], normal: [13000, 15000], slow: [11000, 13000] },
    'Galaxy A54 5G': { fast: [15000, 20000], normal: [13000, 15000], slow: [11000, 13000] },
    'Galaxy A56 5G': { fast: [18000, 23000], normal: [15000, 18000], slow: [13000, 15000] },
    'Galaxy S10 / S10+': { fast: [12000, 15000], normal: [10000, 12000], slow: [8000, 10000] },
    'Galaxy S20 / S20 FE': { fast: [18000, 22000], normal: [15000, 18000], slow: [12000, 15000] },
    'Galaxy S21 / S21+': { fast: [20000, 25000], normal: [18000, 20000], slow: [15000, 18000] },
    'Galaxy S22 / S22+': { fast: [22000, 28000], normal: [19000, 22000], slow: [16000, 19000] },
    'Galaxy S23 / S23+': { fast: [24000, 32000], normal: [20000, 24000], slow: [18000, 20000] },
    'Galaxy S24 / S24+': { fast: [28000, 38000], normal: [24000, 28000], slow: [20000, 24000] },
    'Galaxy S25 Series': { fast: [35000, 65000], normal: [30000, 35000], slow: [25000, 30000] },
    'Galaxy Z Flip / Z Fold': { fast: [60000, 90000], normal: [50000, 60000], slow: [40000, 50000] }
  },
  'Xiaomi': {
    'Redmi Note 9 / 10': { fast: [7000, 10000], normal: [5000, 7000], slow: [4000, 5000] },
    'Redmi Note 11 / 12': { fast: [9000, 13000], normal: [7000, 9000], slow: [6000, 7000] },
    'Redmi Note 13 / 13 Pro': { fast: [12000, 18000], normal: [10000, 12000], slow: [8000, 10000] },
    'Redmi Note 14 / 14 Pro': { fast: [15000, 22000], normal: [12000, 15000], slow: [10000, 12000] },
    'Xiaomi 13 / 13T / 14 / 14T': { fast: [25000, 32000], normal: [20000, 25000], slow: [16000, 20000] },
    'Xiaomi 15T Pro / 15 / 15 Pro': { fast: [35000, 45000], normal: [30000, 35000], slow: [25000, 30000] },
    'Xiaomi 17 Pro / 17 Pro Max': { fast: [40000, 55000], normal: [35000, 40000], slow: [30000, 35000] },
    'POCO X6 Pro / X7 Pro': { fast: [16000, 22000], normal: [13000, 16000], slow: [10000, 13000] }
  }
};

const getUsers = () => DB.get(K.USERS) || {};
const getAuctions = () => DB.get(K.AUCTIONS) || [];
const getSession = () => DB.get(K.SESSION);
const getStats = () => DB.get(K.STATS) || { totalBids: 0 };
const getPending = () => DB.get(K.PENDING) || [];
const saveUsers = u => DB.set(K.USERS, u);
const saveAuctions = a => DB.set(K.AUCTIONS, a);
const saveSession = s => DB.set(K.SESSION, s);
const savePending = p => DB.set(K.PENDING, p);

// ══════════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════════
let currentBidItemId = null;
let timerMap = {};

// ══════════════════════════════════════════════════
//  FORMAT
// ══════════════════════════════════════════════════
const fmtMoney = n => n.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' TL';
const fmtDate = ts => new Date(ts).toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' });
const fmtShort = ts => new Date(ts).toLocaleDateString('tr-TR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
const remainingSec = a => Math.max(0, Math.floor((a.endsAt - Date.now()) / 1000));
const escHtml = s => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const initials = name => name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();

function fmtTime(sec) {
  if (sec <= 0) return 'Süre Bitti';
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  if (h > 0) return `${h}s ${String(m).padStart(2, '0')}d ${String(s).padStart(2, '0')}s`;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ══════════════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════════════
function showHome() {
  document.getElementById('mainView').style.display = '';
  document.getElementById('profileView').classList.remove('open');
  document.getElementById('adminPanel').classList.remove('open');
  renderAuctions();
}

function showProfile() {
  if (!getSession()) { openModal('authModal'); return; }
  document.getElementById('mainView').style.display = 'none';
  document.getElementById('profileView').classList.add('open');
  document.getElementById('adminPanel').classList.remove('open');
  renderProfilePage();
}

function hideAllViews() {
  document.getElementById('mainView').style.display = 'none';
  document.getElementById('profileView').classList.remove('open');
  document.getElementById('adminPanel').classList.remove('open');
}

// ══════════════════════════════════════════════════
//  AUTH
// ══════════════════════════════════════════════════
function openAuthModal() {
  if (getSession()) { showToast('Zaten giriş yaptınız.', 'info'); return; }
  openModal('authModal');
}

function switchTab(tab) {
  ['login', 'register'].forEach(t => {
    document.getElementById('tab' + cap(t)).classList.toggle('active', t === tab);
    document.getElementById('panel' + cap(t)).classList.toggle('active', t === tab);
  });
}

const cap = s => s[0].toUpperCase() + s.slice(1);

function doRegister() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const phone = document.getElementById('regPhone').value.trim();
  const pass = document.getElementById('regPass').value;
  
  if (!name || !email || !phone || !pass) return showAlert('regAlert', 'Tüm alanları doldurun.');
  if (pass.length < 6) return showAlert('regAlert', 'Şifre en az 6 karakter olmalı.');
  if (!email.includes('@')) return showAlert('regAlert', 'Geçerli bir e-posta girin.');
  
  const phoneRegex = /^(0?5\d{9}|\+905\d{9})$/;
  const cleanPhone = phone.replace(/\s+/g, '');
  if (!phoneRegex.test(cleanPhone)) return showAlert('regAlert', 'Geçerli bir Türk telefon numarası girin. (5XXXXXXXXX veya 05XXXXXXXXX)');
  
  const users = getUsers();
  if (users[email]) return showAlert('regAlert', 'Bu e-posta zaten kayıtlı.');
  
  sessionStorage.setItem('pendingReg', JSON.stringify({ name, email, phone: cleanPhone, pass }));
  sendSmsCode(cleanPhone);
}

function sendSmsCode(phone) {
  const code = '123456';
  const codeExpiry = Date.now() + 5 * 60000;
  
  sessionStorage.setItem('smsCode', code);
  sessionStorage.setItem('smsCodeExpiry', codeExpiry);
  sessionStorage.setItem('smsPhone', phone);
  
  console.log(`📱 SMS Doğrulama Kodu: ${code} (5 dakika geçerli)`);
  
  document.getElementById('smsVerifyPhone').textContent = `📱 ${phone.slice(-4)}`;
  document.getElementById('smsVerifyCode').value = '';
  document.getElementById('smsVerifyAlert').textContent = '';
  document.getElementById('smsVerifyAlert').style.display = 'none';
  
  closeModal('authModal');
  openModal('smsVerifyModal');
  showToast(`📩 Doğrulama kodu: ${code} (Test ortamı)`, 'info');
}

function verifySmsCode() {
  const enteredCode = document.getElementById('smsVerifyCode').value.trim();
  const savedCode = sessionStorage.getItem('smsCode');
  const codeExpiry = parseInt(sessionStorage.getItem('smsCodeExpiry'));
  
  if (!enteredCode) return showAlert('smsVerifyAlert', 'Doğrulama kodunu girin.');
  if (Date.now() > codeExpiry) return showAlert('smsVerifyAlert', 'Kodun süresi doldu. Yeniden kayıt olun.');
  if (enteredCode !== savedCode) return showAlert('smsVerifyAlert', 'Kodunuz hatalı.');
  
  completeRegistration();
}

function completeRegistration() {
  const pendingReg = JSON.parse(sessionStorage.getItem('pendingReg'));
  if (!pendingReg) return;
  
  const { name, email, phone, pass } = pendingReg;
  const users = getUsers();
  
  users[email] = { name, email, phone, pass, balance: 5000, joined: Date.now(), bids: {}, myAuctions: [], phoneVerified: true };
  saveUsers(users);
  const st = getStats(); st.totalUsers = Object.keys(users).length; DB.set(K.STATS, st);
  saveSession({ email });
  
  sessionStorage.removeItem('pendingReg');
  sessionStorage.removeItem('smsCode');
  sessionStorage.removeItem('smsCodeExpiry');
  sessionStorage.removeItem('smsPhone');
  
  closeModal('smsVerifyModal');
  updateUI();
  showToast(`Hoş geldin ${name}! ✅ Telefon doğrulandı. 5.000 TL bakiye yüklendi.`, 'success');
}

function doLogin() {
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass = document.getElementById('loginPass').value;
  showAlert('loginAlert', '', false);
  const users = getUsers();
  if (!users[email] || users[email].pass !== pass) return showAlert('loginAlert', 'E-posta veya şifre hatalı.');
  saveSession({ email });
  closeModal('authModal');
  updateUI();
  showToast(`Tekrar hoş geldin, ${users[email].name}!`, 'success');
}

function logout() {
  saveSession(null);
  showHome();
  updateUI();
  showToast('Başarıyla çıkış yapıldı.', 'info');
}

// ══════════════════════════════════════════════════
//  UI UPDATE
// ══════════════════════════════════════════════════
function updateUI() {
  const session = getSession();
  const users = getUsers();
  const user = session ? users[session.email] : null;
  const loggedIn = !!user;
  document.getElementById('authBtn').style.display = loggedIn ? 'none' : '';
  document.getElementById('heroAuthBtn').style.display = loggedIn ? 'none' : '';
  document.getElementById('logoutBtn').style.display = loggedIn ? '' : 'none';
  document.getElementById('profileNavBtn').style.display = loggedIn ? '' : 'none';
  document.getElementById('addAuctionNavBtn').style.display = loggedIn ? '' : 'none';
  document.getElementById('navBalance').style.display = loggedIn ? '' : 'none';
  if (user) document.getElementById('balanceText').textContent = fmtMoney(user.balance);
  updateStats();
  renderAuctions();
}

function blinkBalance() {
  const el = document.getElementById('navBalance');
  el.classList.remove('blink'); void el.offsetWidth; el.classList.add('blink');
}

function refreshNavBalance() {
  const session = getSession();
  if (!session) return;
  const users = getUsers();
  const user = users[session.email];
  if (!user) return;
  const el = document.getElementById('balanceText');
  const newVal = fmtMoney(user.balance);
  if (el && el.textContent !== newVal) { el.textContent = newVal; blinkBalance(); }
}

// ══════════════════════════════════════════════════
//  STATS
// ══════════════════════════════════════════════════
function updateStats() {
  const auctions = getAuctions();
  const users = getUsers();
  const stats = getStats();
  document.getElementById('statActive').textContent = auctions.filter(a => !a.sold && remainingSec(a) > 0).length;
  document.getElementById('statUsers').textContent = Object.keys(users).length;
  document.getElementById('statBids').textContent = stats.totalBids || 0;
}

// ══════════════════════════════════════════════════
//  RENDER AUCTIONS
// ══════════════════════════════════════════════════
function renderAuctions() {
  const auctions = getAuctions();
  const session = getSession();
  const grid = document.getElementById('auctionGrid');
  Object.values(timerMap).forEach(clearInterval);
  timerMap = {};
  if (!auctions.length) {
    grid.innerHTML = `<div class="no-items"><i class="fa-regular fa-rectangle-list"></i><p>Henüz aktif mezat yok.<br><small>Mezat Ekle butonunu kullanarak ilk mezatı başlatın!</small></p></div>`;
    return;
  }
  grid.innerHTML = auctions.map(a => cardHTML(a, session)).join('');
  auctions.forEach(a => startTimer(a.id));
}

function cardHTML(a, session) {
  const sec = remainingSec(a);
  const sold = a.sold || sec <= 0;
  const urgent = sec > 0 && sec < 120;
  const email = session ? session.email : null;
  const users = email ? getUsers() : null;
  const user = users && email ? users[email] : null;

  const isMyTop = email && a.highBidder === email;
  const myBidInfo = user && user.bids ? user.bids[a.id] : null;
  const isOutbid = myBidInfo && !isMyTop;
  const isMyAuction = email && a.addedBy === email;

  let cardClass = 'auction-card';
  if (!sold && isMyTop) cardClass += ' my-bid-card';
  if (!sold && isOutbid) cardClass += ' outbid-card';
  if (sold) cardClass += ' sold';

  const imgFrag = a.imgUrl
    ? `<img src="${escHtml(a.imgUrl)}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">` : '';
  const placeholderStyle = a.imgUrl ? 'style="display:none"' : '';

  // Bid block
  let bidBlock = '';
  if (myBidInfo) {
    if (isMyTop && !sold) {
      bidBlock = `<div class="my-bid-block"><div><div class="lbl">Teklifiniz (Blokeli)</div><div class="val">${fmtMoney(myBidInfo.amount)}</div></div><div style="color:var(--gold);font-size:.85rem"><i class="fa-solid fa-crown"></i> Lider</div></div>`;
    } else if (isOutbid && !sold) {
      bidBlock = `<div class="outbid-block"><i class="fa-solid fa-triangle-exclamation" style="flex-shrink:0"></i><div><strong>Geride kaldınız!</strong><br>Teklifiniz (${fmtMoney(myBidInfo.amount)}) bakiyenize iade edildi.</div></div>`;
    } else if (sold && isMyTop) {
      bidBlock = `<div class="won-block"><div><div class="lbl">Kazandınız! 🏆</div><div class="val">${fmtMoney(myBidInfo.amount)}</div></div><i class="fa-solid fa-trophy" style="color:var(--success);font-size:1.3rem"></i></div>`;
    } else if (sold && isOutbid) {
      bidBlock = `<div class="outbid-block"><i class="fa-solid fa-ban" style="flex-shrink:0"></i><div>Mezat kapandı. Teklifiniz iade edildi.</div></div>`;
    }
  }

  return `<div class="${cardClass}" id="card-${a.id}">
    <div class="card-img-wrap">
      ${imgFrag}
      <div class="img-placeholder" ${placeholderStyle}><i class="fa-regular fa-image"></i><span>Görsel Yok</span></div>
      <div class="card-badge">${escHtml(a.category || 'Genel')}</div>
      ${isMyAuction ? '<div class="user-auction-badge"><i class="fa-solid fa-store"></i> Sizin</div>' : ''}
      ${sold ? '<div class="sold-overlay">SATILDI</div>' : ''}
    </div>
    <div class="card-body">
      <div class="card-title">${escHtml(a.name)}</div>
      <div class="${urgent ? 'card-timer urgent' : 'card-timer'}" id="timer-${a.id}">
        <i class="fa-regular fa-clock"></i><span>${sold ? 'Süre Bitti' : fmtTime(sec)}</span>
      </div>
      ${bidBlock}
      <div class="card-price-row">
        <div>
          <div class="card-price-label">Mevcut Teklif</div>
          <div class="card-price${a.highBidder ? ' winner' : ''}" id="price-${a.id}">${fmtMoney(a.currentPrice)}</div>
        </div>
        <div style="text-align:right">
          <div class="card-price-label">En Yüksek</div>
          <div class="card-bidder"><span>${a.highBidderName || '—'}</span></div>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn-bid" id="bidbtn-${a.id}" ${sold || isMyAuction ? 'disabled' : ''} onclick="openBid('${a.id}')">
          <i class="fa-solid fa-gavel"></i>
          ${sold ? 'Satıldı' : isMyAuction ? 'Kendi Ürününüz' : 'Teklif Ver'}
        </button>
      </div>
    </div>
  </div>`;
}

function startTimer(id) {
  timerMap[id] = setInterval(() => {
    const arts = getAuctions();
    const a = arts.find(x => x.id === id);
    if (!a) { clearInterval(timerMap[id]); return; }
    const sec = remainingSec(a);
    const timerEl = document.getElementById('timer-' + id);
    const btnEl = document.getElementById('bidbtn-' + id);
    if (!timerEl) { clearInterval(timerMap[id]); return; }
    if (sec <= 0) {
      clearInterval(timerMap[id]);
      timerEl.innerHTML = `<i class="fa-regular fa-clock"></i><span>Süre Bitti</span>`;
      timerEl.className = 'card-timer';
      if (btnEl) { btnEl.disabled = true; btnEl.innerHTML = '<i class="fa-solid fa-ban"></i> Satıldı'; }
      const card = document.getElementById('card-' + id);
      if (card) card.classList.add('sold');
      if (!a.sold) {
        a.sold = true; saveAuctions(arts);
        const s = getSession();
        if (s && a.highBidder === s.email) showToast(`🏆 Tebrikler! "${a.name}" mezatını kazandınız!`, 'success');
      }
      updateStats(); refreshNavBalance();
    } else {
      const urgent = sec < 120;
      timerEl.className = urgent ? 'card-timer urgent' : 'card-timer';
      timerEl.innerHTML = `<i class="fa-regular fa-clock"></i><span>${fmtTime(sec)}</span>`;
    }
  }, 1000);
}

// ══════════════════════════════════════════════════
//  BID LOGIC
// ══════════════════════════════════════════════════
function openBid(id) {
  const session = getSession();
  if (!session) { openModal('authModal'); return; }
  const auctions = getAuctions();
  const a = auctions.find(x => x.id === id);
  if (!a || a.sold || remainingSec(a) <= 0) return showToast('Bu mezat sona ermiş.', 'error');
  if (a.addedBy === session.email) return showToast('Kendi ürününüze teklif veremezsiniz.', 'error');
  const users = getUsers(); const user = users[session.email];
  const bidAmount = Math.ceil(a.currentPrice * 1.10);
  const afterBal = user.balance - bidAmount;
  currentBidItemId = id;
  document.getElementById('bidModalItemName').textContent = a.name;
  document.getElementById('bidModalAmount').textContent = fmtMoney(bidAmount);
  document.getElementById('bidModalBalance').textContent = fmtMoney(user.balance);
  const afterEl = document.getElementById('bidModalAfterBalance');
  afterEl.textContent = fmtMoney(afterBal);
  afterEl.style.color = afterBal < 0 ? 'var(--danger)' : 'var(--text)';
  document.getElementById('bidAlert').style.display = 'none';
  openModal('bidModal');
}

function confirmBid() {
  const session = getSession(); if (!session) return;
  const auctions = getAuctions();
  const idx = auctions.findIndex(x => x.id === currentBidItemId);
  if (idx === -1) return;
  const a = auctions[idx];
  if (a.sold || remainingSec(a) <= 0) { showAlert('bidAlert', 'Bu mezat sona ermiş.'); return; }
  const bidAmount = Math.ceil(a.currentPrice * 1.10);
  const users = getUsers(); const user = users[session.email];
  if (user.balance < bidAmount) { showAlert('bidAlert', 'Yetersiz bakiye! Teklif veremezsiniz.'); return; }

  const prevBidder = a.highBidder;
  const prevPrice = a.currentPrice;

  // Refund previous top bidder
  if (prevBidder && prevBidder !== session.email && users[prevBidder]) {
    users[prevBidder].balance += prevPrice;
    // Remove lock from their bids
    if (users[prevBidder].bids && users[prevBidder].bids[a.id]) {
      users[prevBidder].bids[a.id].outbid = true;
    }
    saveUsers(users);// save refund immediately so their navbar updates
    // We fire a flag so next refresh they'll see it:
    DB.set('ac2_outbid_' + prevBidder + '_' + a.id, { at: Date.now(), auctionName: a.name, refunded: prevPrice });
  }

  // Deduct
  user.balance -= bidAmount;
  if (!user.bids) user.bids = {};
  user.bids[a.id] = { amount: bidAmount, auctionName: a.name, at: Date.now(), auctionId: a.id, outbid: false };
  users[session.email] = user;
  saveUsers(users);

  // Update auction
  const shortName = user.name.split(' ')[0] + (user.name.split(' ')[1] ? ' ' + user.name.split(' ')[1][0] + '.' : '');
  auctions[idx].currentPrice = bidAmount;
  auctions[idx].highBidder = session.email;
  auctions[idx].highBidderName = shortName;
  if (!auctions[idx].bidHistory) auctions[idx].bidHistory = [];
  auctions[idx].bidHistory.unshift({ bidder: session.email, bidderName: user.name, amount: bidAmount, at: Date.now() });
  saveAuctions(auctions);

  const st = getStats(); st.totalBids = (st.totalBids || 0) + 1; DB.set(K.STATS, st);
  const priceEl = document.getElementById('price-' + a.id);
  if (priceEl) { priceEl.textContent = fmtMoney(bidAmount); priceEl.classList.add('winner'); }
  closeModal('bidModal');
  blinkBalance();
  updateUI();
  showToast(`✅ Teklifiniz kabul edildi: ${fmtMoney(bidAmount)}`, 'success');
}

// ══════════════════════════════════════════════════
//  OUTBID DETECTION
// ══════════════════════════════════════════════════
function checkOutbidNotifications() {
  const session = getSession(); if (!session) return;
  const users = getUsers(); const user = users[session.email]; if (!user) return;
  const auctions = getAuctions();
  let changed = false;
  auctions.forEach(a => {
    if (!a.sold && remainingSec(a) > 0 && a.highBidder !== session.email) {
      const myBid = user.bids ? user.bids[a.id] : null;
      if (myBid && !myBid.outbid) {
        // User was outbid — already refunded when other user bid
        // Mark as outbid in user record so we show the indicator
        user.bids[a.id].outbid = true;
        changed = true;
        showToast(`⚡ "${a.name}" mezatında geride kaldınız! Bakiyeniz iade edildi.`, 'error');
      }
    }
  });
  if (changed) { saveUsers({ ...getUsers(), [session.email]: user }); }
}

// ══════════════════════════════════════════════════
//  USER ADD AUCTION
// ══════════════════════════════════════════════════
function calculateCommission() {
  const priceInput = document.getElementById('uProdPrice');
  const price = parseFloat(priceInput.value) || 0;
  const commissionInfo = document.getElementById('commissionInfo');
  const commPrice = document.getElementById('commPrice');
  const commAmount = document.getElementById('commAmount');
  const commNet = document.getElementById('commNet');
  
  if (price <= 0) {
    commissionInfo.style.display = 'none';
    return;
  }
  
  const commission = price * 0.10;
  const netAmount = price - commission;
  
  commPrice.textContent = fmtMoney(price).replace(' TL', '');
  commAmount.textContent = fmtMoney(commission).replace(' TL', '');
  commNet.textContent = fmtMoney(netAmount).replace(' TL', '');
  commissionInfo.style.display = 'block';
}

function openAddAuctionModal() {
  if (!getSession()) { openModal('authModal'); return; }
  document.getElementById('userAuctionAlert').style.display = 'none';
  document.getElementById('userAuctionSuccess').style.display = 'none';
  document.getElementById('phonePricingTable').style.display = 'none';
  document.getElementById('commissionInfo').style.display = 'none';
  ['uPhoneBrand', 'uPhoneModel', 'uProdDesc', 'uProdPrice', 'uProdMinutes', 'uProdImg'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  openModal('addAuctionModal');
}

function submitUserAuction() {
  const session = getSession(); if (!session) return;
  const brand = document.getElementById('uPhoneBrand').value.trim();
  const model = document.getElementById('uPhoneModel').value.trim();
  const desc = document.getElementById('uProdDesc').value.trim();
  const price = parseFloat(document.getElementById('uProdPrice').value);
  const minutes = parseInt(document.getElementById('uProdMinutes').value);
  const fileInput = document.getElementById('uProdImg');
  if (!brand) return showAlert('userAuctionAlert', 'Telefon markası seçin.');
  if (!model) return showAlert('userAuctionAlert', 'Telefon modeli seçin.');
  if (isNaN(price) || price <= 0) return showAlert('userAuctionAlert', 'Geçerli bir başlangıç fiyatı girin.');
  if (isNaN(minutes) || minutes < 5) return showAlert('userAuctionAlert', 'Süre en az 5 dakika olmalı.');
  const file = fileInput.files[0];
  const prodName = `${brand} ${model}`;
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imgBase64 = e.target.result;
      submitAuctionWithImage(session, prodName, desc, price, minutes, imgBase64, brand, model);
    };
    reader.readAsDataURL(file);
  } else {
    submitAuctionWithImage(session, prodName, desc, price, minutes, '', brand, model);
  }
}

function updatePhoneModels() {
  const brand = document.getElementById('uPhoneBrand').value;
  const modelSelect = document.getElementById('uPhoneModel');
  modelSelect.innerHTML = '';
  if (!brand) {
    modelSelect.innerHTML = '<option value="">Önce marka seçin</option>';
    return;
  }
  const models = Object.keys(PHONE_PRICES[brand] || {});
  if (models.length === 0) {
    modelSelect.innerHTML = '<option value="">Model bulunamadı</option>';
    return;
  }
  models.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m;
    opt.textContent = m;
    modelSelect.appendChild(opt);
  });
}

function getPhonePrices(brand, model) {
  return PHONE_PRICES[brand]?.[model] || null;
}

function showPricingTable() {
  const brand = document.getElementById('uPhoneBrand').value;
  const model = document.getElementById('uPhoneModel').value;
  const pricingEl = document.getElementById('phonePricingTable');
  if (!brand || !model) {
    pricingEl.style.display = 'none';
    return;
  }
  const prices = getPhonePrices(brand, model);
  if (!prices) {
    pricingEl.style.display = 'none';
    return;
  }
  pricingEl.innerHTML = `
    <div style="font-size:.8rem;font-weight:600;margin-bottom:10px;color:var(--text-dim)">💰 ONU BU FIYAT ARALIKLARINA KOYUN:</div>
    <div style="display:grid;grid-template-columns:1fr;gap:8px;font-size:.8rem">
      <div style="padding:8px;background:rgba(76,175,80,.1);border-left:3px solid #4CAF50;border-radius:4px">
        <div style="color:#4CAF50;font-weight:600">🟢 HIZLI SATILIR (En İyi)</div>
        <div style="color:var(--text);margin-top:4px">${fmtMoney(prices.slow[0])} – ${fmtMoney(prices.slow[1])}</div>
      </div>
      <div style="padding:8px;background:rgba(255,193,7,.1);border-left:3px solid #FFC107;border-radius:4px">
        <div style="color:#FFC107;font-weight:600">🟡 NORMAL SATILIR (Orta)</div>
        <div style="color:var(--text);margin-top:4px">${fmtMoney(prices.normal[0])} – ${fmtMoney(prices.normal[1])}</div>
      </div>
      <div style="padding:8px;background:rgba(244,67,54,.1);border-left:3px solid #F44336;border-radius:4px">
        <div style="color:#F44336;font-weight:600">🔴 ZOR SATILIR (İhtiyatla)</div>
        <div style="color:var(--text);margin-top:4px">${fmtMoney(prices.fast[0])} – ${fmtMoney(prices.fast[1])}</div>
      </div>
    </div>
  `;
  pricingEl.style.display = 'block';
}

function submitAuctionWithImage(session, name, desc, price, minutes, imgBase64, brand, model) {
  const users = getUsers(); const user = users[session.email];
  const pending = getPending();
  pending.unshift({ id: 'p_' + Date.now(), name, desc, category: 'Telefon', startPrice: price, minutes, imgUrl: imgBase64, addedBy: session.email, addedByName: user.name, submittedAt: Date.now(), phoneBrand: brand, phoneModel: model });
  savePending(pending);
  showAlert('userAuctionAlert', '', false);
  document.getElementById('userAuctionSuccess').textContent = '✅ Ürününüz onay için gönderildi! Admin onayladıktan sonra yayınlanacak.';
  document.getElementById('userAuctionSuccess').className = 'alert alert-success';
  document.getElementById('userAuctionSuccess').style.display = 'block';
  ['uProdDesc', 'uProdPrice', 'uProdMinutes', 'uProdImg', 'uPhoneBrand', 'uPhoneModel'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  setTimeout(() => { closeModal('addAuctionModal'); }, 2200);
  showToast('Ürününüz onay kuyruğuna eklendi 📥', 'info');
  updatePendingBadge();
}

// ══════════════════════════════════════════════════
//  PROFILE
// ══════════════════════════════════════════════════
function renderProfilePage() {
  const session = getSession(); if (!session) return;
  const users = getUsers(); const user = users[session.email]; if (!user) return;
  const auctions = getAuctions();

  document.getElementById('profileAvatar').textContent = initials(user.name);
  document.getElementById('profileName').textContent = user.name;
  document.getElementById('profileEmail').textContent = user.email;
  document.getElementById('profileJoined').textContent = 'Üyelik: ' + fmtDate(user.joined);

  // Locked = current winning bids in active auctions
  let locked = 0;
  auctions.forEach(a => { if (a.highBidder === session.email && !a.sold && remainingSec(a) > 0) locked += a.currentPrice; });

  document.getElementById('balanceCards').innerHTML = `
    <div class="balance-card highlight">
      <div class="balance-card-label"><i class="fa-solid fa-coins"></i> Kullanılabilir Bakiye</div>
      <div class="balance-card-value">${fmtMoney(user.balance)}</div>
      <div class="balance-card-sub">Teklif verebileceğiniz tutar</div>
    </div>
    <div class="balance-card">
      <div class="balance-card-label"><i class="fa-solid fa-lock"></i> Blokeli Bakiye</div>
      <div class="balance-card-value" style="color:var(--text-dim)">${fmtMoney(locked)}</div>
      <div class="balance-card-sub">Kazanan tekliflerinizde bekleyen</div>
    </div>
    <div class="balance-card">
      <div class="balance-card-label"><i class="fa-solid fa-wallet"></i> Toplam Varlık</div>
      <div class="balance-card-value" style="color:var(--text)">${fmtMoney(user.balance + locked)}</div>
      <div class="balance-card-sub">Kullanılabilir + Blokeli</div>
    </div>
    <div class="balance-card">
      <div class="balance-card-label"><i class="fa-solid fa-gavel"></i> Teklif Verilen</div>
      <div class="balance-card-value" style="color:var(--text-dim)">${Object.keys(user.bids || {}).length}</div>
      <div class="balance-card-sub">Katıldığınız mezat sayısı</div>
    </div>`;

  switchProfileTab('bids');
}

function switchProfileTab(tab) {
  const map = { bids: 'ptabBids', myauctions: 'ptabMy', history: 'ptabHist' };
  const panelMap = { bids: 'profileBids', myauctions: 'profileMyAuctions', history: 'profileHistory' };
  Object.keys(map).forEach(t => {
    document.getElementById(map[t]).classList.toggle('active', t === tab);
    document.getElementById(panelMap[t]).style.display = t === tab ? '' : 'none';
  });
  if (tab === 'bids') renderProfileBids();
  if (tab === 'myauctions') renderProfileMyAuctions();
  if (tab === 'history') renderProfileHistory();
}

function renderProfileBids() {
  const session = getSession(); const users = getUsers(); const user = users[session.email];
  const auctions = getAuctions(); const el = document.getElementById('profileBids');
  const myAuctions = auctions.filter(a => user.bids && user.bids[a.id]);
  if (!myAuctions.length) { el.innerHTML = `<div class="empty-state"><i class="fa-solid fa-gavel"></i>Henüz teklif vermediniz.</div>`; return; }
  el.innerHTML = '<div class="history-list">' + myAuctions.map(a => {
    const sec = remainingSec(a); const sold = a.sold || sec <= 0;
    const isTop = a.highBidder === session.email;
    const myBid = user.bids[a.id];
    let icls = '', sLabel = '', sCls = '';
    if (!sold && isTop) { icls = 'active-bid'; sLabel = 'Lider 👑'; sCls = 'active-bid'; }
    else if (!sold && !isTop) { icls = 'lost'; sLabel = 'Geride Kaldınız'; sCls = 'lost'; }
    else if (sold && isTop) { icls = 'won'; sLabel = 'KAZANDI 🏆'; sCls = 'won'; }
    else { icls = 'lost'; sLabel = 'Kaybetti'; sCls = 'lost'; }
    return `<div class="history-item ${icls}">
      <div class="hi-icon ${icls}"><i class="fa-solid fa-gavel"></i></div>
      <div class="hi-info"><div class="hi-name">${escHtml(a.name)}</div><div class="hi-meta">${escHtml(a.category || 'Genel')} · ${fmtShort(a.createdAt)}</div></div>
      <div style="text-align:right">
        <div class="hi-amount ${icls}">${fmtMoney(isTop ? a.currentPrice : myBid.amount)}</div>
        <div class="hi-status ${sCls}">${sLabel}</div>
      </div></div>`;
  }).join('') + '</div>';
}

function renderProfileMyAuctions() {
  const session = getSession(); const auctions = getAuctions(); const pending = getPending();
  const el = document.getElementById('profileMyAuctions');
  const mine = auctions.filter(a => a.addedBy === session.email);
  const myPending = pending.filter(p => p.addedBy === session.email);
  if (!mine.length && !myPending.length) {
    el.innerHTML = `<div class="empty-state"><i class="fa-solid fa-store"></i>Henüz mezat eklemediniz.<br><small>"Mezat Ekle" butonu ile ürün ekleyebilirsiniz.</small></div>`; return;
  }
  let html = '<div class="history-list">';
  myPending.forEach(p => {
    html += `<div class="history-item pending">
      <div class="hi-icon pending"><i class="fa-solid fa-clock"></i></div>
      <div class="hi-info"><div class="hi-name">${escHtml(p.name)}</div><div class="hi-meta">Onay Bekleniyor · ${fmtShort(p.submittedAt)}</div></div>
      <div style="text-align:right"><div class="hi-amount">${fmtMoney(p.startPrice)}</div><div class="hi-status pending">Beklemede</div></div>
    </div>`;
  });
  mine.forEach(a => {
    const sec = remainingSec(a); const sold = a.sold || sec <= 0;
    const icls = sold ? 'lost' : 'active-bid';
    const sLabel = sold ? 'Sona Erdi' : `Aktif — ${fmtTime(sec)}`;
    html += `<div class="history-item ${icls}">
      <div class="hi-icon ${icls}"><i class="fa-solid fa-store"></i></div>
      <div class="hi-info"><div class="hi-name">${escHtml(a.name)}</div><div class="hi-meta">${escHtml(a.category || 'Genel')} · ${(a.bidHistory || []).length} teklif</div></div>
      <div style="text-align:right"><div class="hi-amount ${sold ? 'won' : 'active-bid'}">${fmtMoney(a.currentPrice)}</div><div class="hi-status ${icls}">${sLabel}</div></div>
    </div>`;
  });
  el.innerHTML = html + '</div>';
}

function renderProfileHistory() {
  const session = getSession(); const users = getUsers(); const user = users[session.email];
  const auctions = getAuctions(); const el = document.getElementById('profileHistory');
  const all = auctions.filter(a => a.highBidder === session.email || (user.bids && user.bids[a.id]) || a.addedBy === session.email);
  all.sort((x, y) => y.createdAt - x.createdAt);
  if (!all.length) { el.innerHTML = `<div class="empty-state"><i class="fa-solid fa-clock-rotate-left"></i>Geçmiş aktivite yok.</div>`; return; }
  el.innerHTML = '<div class="history-list">' + all.map(a => {
    const sec = remainingSec(a); const sold = a.sold || sec <= 0;
    const isTop = a.highBidder === session.email;
    const isMine = a.addedBy === session.email;
    const myBid = user.bids ? user.bids[a.id] : null;
    let icls = '', lbl = '', sLabel = '', sCls = '';
    if (isMine && !isTop) { icls = 'pending'; lbl = 'Satıcısı'; sLabel = sold ? 'Mezat Kapandı' : 'Aktif Mezatınız'; sCls = sold ? 'lost' : 'active-bid'; }
    else if (!sold && isTop) { icls = 'active-bid'; lbl = 'Lider'; sLabel = 'Lider 👑'; sCls = 'active-bid'; }
    else if (sold && isTop) { icls = 'won'; lbl = 'Kazandı'; sLabel = 'KAZANDI 🏆'; sCls = 'won'; }
    else if (myBid) { icls = 'lost'; lbl = 'Teklif Verdi'; sLabel = sold ? 'Kaybetti' : 'Geride'; sCls = 'lost'; }
    const amount = isTop ? a.currentPrice : (myBid ? myBid.amount : a.startPrice);
    return `<div class="history-item ${icls}">
      <div class="hi-icon ${icls}"><i class="fa-solid fa-${isMine && !isTop ? 'store' : 'gavel'}"></i></div>
      <div class="hi-info"><div class="hi-name">${escHtml(a.name)}</div><div class="hi-meta">${lbl} · ${fmtShort(a.createdAt)}</div></div>
      <div style="text-align:right"><div class="hi-amount ${icls}">${fmtMoney(amount)}</div><div class="hi-status ${sCls}">${sLabel}</div></div>
    </div>`;
  }).join('') + '</div>';
}

// ══════════════════════════════════════════════════
//  ADMIN
// ══════════════════════════════════════════════════
function openAdminAuth() { document.getElementById('adminPassInput').value = ''; openModal('adminAuthModal'); }

function checkAdminPass() {
  if (document.getElementById('adminPassInput').value === '1234') {
    closeModal('adminAuthModal'); hideAllViews();
    document.getElementById('adminPanel').classList.add('open');
    renderAdminPanel();
  } else showAlert('adminAuthAlert', 'Hatalı şifre!');
}

function switchAdminTab(tab) {
  ['active', 'pending', 'users'].forEach(t => {
    document.getElementById('atab-' + t).classList.toggle('active', t === tab);
  });
  document.getElementById('adminActiveList').style.display = tab === 'active' ? '' : 'none';
  document.getElementById('adminPendingList').style.display = tab === 'pending' ? '' : 'none';
  document.getElementById('adminUsersList').style.display = tab === 'users' ? '' : 'none';
}

function renderAdminPanel() { renderAdminList(); renderPendingList(); renderUsersList(); updatePendingBadge(); }

function updatePendingBadge() { const c = getPending().length; const el = document.getElementById('pendingCount'); if (el) el.textContent = c > 0 ? `(${c})` : ''; }

function addProductAdmin() {
  const name = document.getElementById('prodName').value.trim();
  const price = parseFloat(document.getElementById('prodPrice').value);
  const minutes = parseInt(document.getElementById('prodMinutes').value);
  const imgUrl = document.getElementById('prodImg').value.trim();
  const cat = document.getElementById('prodCat').value;
  if (!name) return showAlert('adminAlert', 'Ürün adı gerekli.');
  if (!price || price <= 0) return showAlert('adminAlert', 'Geçerli bir fiyat girin.');
  if (!minutes || minutes < 1) return showAlert('adminAlert', 'Süre en az 1 dakika olmalı.');
  const auctions = getAuctions();
  auctions.unshift({ id: 'a_' + Date.now(), name, category: cat, startPrice: price, currentPrice: price, highBidder: null, highBidderName: null, imgUrl: imgUrl || '', endsAt: Date.now() + minutes * 60000, sold: false, createdAt: Date.now(), addedBy: 'admin', bidHistory: [] });
  saveAuctions(auctions);
  ['prodName', 'prodPrice', 'prodMinutes', 'prodImg'].forEach(id => document.getElementById(id).value = '');
  showAlert('adminSuccess', '✅ Ürün eklendi!', true, true);
  renderAdminList(); updateStats();
}

function deleteProduct(id) {
  if (!confirm('Bu ürünü silmek istediğinize emin misiniz?')) return;
  saveAuctions(getAuctions().filter(a => a.id !== id));
  renderAdminList(); updateStats();
}

function renderAdminList() {
  const auctions = getAuctions(); const el = document.getElementById('adminActiveList'); if (!el) return;
  if (!auctions.length) { el.innerHTML = '<div class="admin-empty"><i class="fa-regular fa-folder-open" style="font-size:2rem;display:block;margin-bottom:8px"></i>Henüz ürün yok</div>'; return; }
  el.innerHTML = auctions.map(a => {
    const sec = remainingSec(a);
    const status = a.sold || sec <= 0 ? `<span style="color:var(--danger);font-size:.75rem">SONA ERDİ</span>` : `<span style="color:var(--success);font-size:.75rem">Kalan: ${fmtTime(sec)}</span>`;
    const imgFrag = a.imgUrl ? `<img src="${escHtml(a.imgUrl)}" onerror="this.parentElement.innerHTML='<i class=\\'fa-regular fa-image\\'></i>'">`  : '<i class="fa-regular fa-image"></i>';
    return `<div class="admin-item">
      <div class="admin-item-img">${imgFrag}</div>
      <div class="admin-item-info"><div class="admin-item-name">${escHtml(a.name)}</div><div class="admin-item-meta">${fmtMoney(a.currentPrice)} · ${status} · ${(a.bidHistory || []).length} teklif</div></div>
      <button class="btn btn-danger btn-sm" onclick="deleteProduct('${a.id}')"><i class="fa-solid fa-trash"></i></button>
    </div>`;
  }).join('');
}

function renderPendingList() {
  const pending = getPending(); const el = document.getElementById('adminPendingList'); if (!el) return;
  if (!pending.length) { el.innerHTML = '<div class="admin-empty"><i class="fa-solid fa-inbox" style="font-size:2rem;display:block;margin-bottom:8px"></i>Onay bekleyen ürün yok</div>'; return; }
  el.innerHTML = pending.map(p => {
    const priceHtml = p.phoneBrand && p.phoneModel ? (() => {
      const prices = getPhonePrices(p.phoneBrand, p.phoneModel);
      if (!prices) return '';
      return `<div style="margin-top:12px;padding:10px;background:var(--bg-dim);border-radius:6px;border-left:3px solid var(--gold)">
        <div style="font-size:.8rem;font-weight:600;margin-bottom:8px;color:var(--text-dim)">💰 FIYATLANDıRMA ÖNERİSİ:</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:.75rem">
          <div><span style="color:#4CAF50">🟢 Hızlı Satılır:</span> ${fmtMoney(prices.slow[0])}–${fmtMoney(prices.slow[1])}</div>
          <div><span style="color:#FFC107">🟡 Normal Satılır:</span> ${fmtMoney(prices.normal[0])}–${fmtMoney(prices.normal[1])}</div>
          <div style="grid-column:1/-1"><span style="color:#F44336">🔴 Zor Satılır:</span> ${fmtMoney(prices.fast[0])}–${fmtMoney(prices.fast[1])}</div>
        </div>
      </div>`;
    })() : '';
    return `
    <div class="approval-item">
      <div style="font-weight:600;font-size:.95rem">${escHtml(p.name)}</div>
      <div class="approval-meta">
        Gönderen: <strong>${escHtml(p.addedByName)}</strong> &nbsp;·&nbsp; Fiyat: <strong>${fmtMoney(p.startPrice)}</strong><br>
        Süre: <strong>${p.minutes} dk</strong> &nbsp;·&nbsp; Kategori: <strong>${escHtml(p.category)}</strong><br>
        ${p.desc ? `Açıklama: ${escHtml(p.desc)}<br>` : ''}
        ${p.imgUrl ? `Görsel: <a href="${escHtml(p.imgUrl)}" target="_blank" style="color:var(--gold)">Önizle</a>` : 'Görsel yok'}
        ${priceHtml}
      </div>
      <div class="approval-actions">
        <button class="btn btn-success btn-sm" onclick="approveProduct('${p.id}')"><i class="fa-solid fa-check"></i> Onayla</button>
        <button class="btn btn-danger btn-sm" onclick="rejectProduct('${p.id}')"><i class="fa-solid fa-xmark"></i> Reddet</button>
      </div>
    </div>`;
  }).join('');
}

function approveProduct(pid) {
  const pending = getPending(); const idx = pending.findIndex(p => p.id === pid); if (idx === -1) return;
  const p = pending[idx]; const auctions = getAuctions();
  const auctionObj = { id: 'a_' + Date.now(), name: p.name, category: p.category, startPrice: p.startPrice, currentPrice: p.startPrice, highBidder: null, highBidderName: null, imgUrl: p.imgUrl || '', endsAt: Date.now() + p.minutes * 60000, sold: false, createdAt: Date.now(), addedBy: p.addedBy, desc: p.desc || '', bidHistory: [] };
  if (p.phoneBrand && p.phoneModel) { auctionObj.phoneBrand = p.phoneBrand; auctionObj.phoneModel = p.phoneModel; }
  auctions.unshift(auctionObj);
  saveAuctions(auctions); pending.splice(idx, 1); savePending(pending);
  renderPendingList(); renderAdminList(); updateStats(); updatePendingBadge();
  showToast('Ürün onaylandı ve yayınlandı!', 'success');
}

function rejectProduct(pid) {
  if (!confirm('Bu ürünü reddetmek istediğinize emin misiniz?')) return;
  savePending(getPending().filter(p => p.id !== pid));
  renderPendingList(); updatePendingBadge();
  showToast('Ürün reddedildi.', 'info');
}

function renderUsersList() {
  const users = getUsers();
  const el = document.getElementById('adminUsersList');
  if (!el) return;
  const userList = Object.values(users);
  if (!userList.length) {
    el.innerHTML = '<div class="admin-empty"><i class="fa-solid fa-users" style="font-size:2rem;display:block;margin-bottom:8px"></i>Hiçbir kullanıcı kayıtlı değil</div>';
    return;
  }
  el.innerHTML = '<div style="display:flex;flex-direction:column;gap:.75rem">' + userList.map(u => {
    const joinDate = fmtDate(u.joined);
    const bidCount = Object.keys(u.bids || {}).length;
    return `
      <div class="history-item active-bid">
        <div class="hi-icon active-bid"><i class="fa-solid fa-user"></i></div>
        <div class="hi-info">
          <div class="hi-name" style="font-weight:700;font-size:.95rem">${escHtml(u.name)}</div>
          <div class="hi-meta" style="margin-top:4px;line-height:1.5;font-size:.8rem;color:var(--text-dim)">
            <div>📧 ${escHtml(u.email)}</div>
            <div>📅 Katılım: ${joinDate}</div>
            <div>💰 Bakiye: ${fmtMoney(u.balance)}</div>
            <div>🏆 Teklif Sayısı: ${bidCount}</div>
          </div>
        </div>
      </div>
    `;
  }).join('') + '</div>';
}

// ══════════════════════════════════════════════════
//  MODALS
// ══════════════════════════════════════════════════
function openModal(id) { document.getElementById(id).classList.add('open'); }

function closeModal(id) { document.getElementById(id).classList.remove('open'); }

document.querySelectorAll('.modal-bg').forEach(bg => {
  bg.addEventListener('click', e => { if (e.target === bg) bg.classList.remove('open'); });
});

function showAlert(id, msg, isSuccess = false, clearAfter = false) {
  const el = document.getElementById(id); if (!el) return;
  el.textContent = msg; el.className = 'alert ' + (isSuccess ? 'alert-success' : 'alert-error');
  el.style.display = msg ? 'block' : 'none';
  if (clearAfter) setTimeout(() => { el.style.display = 'none'; }, 3000);
}

// ══════════════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════════════
function showToast(msg, type = 'info') {
  const wrap = document.getElementById('toastWrap');
  const el = document.createElement('div');
  el.className = 'toast ' + type; el.textContent = msg;
  wrap.appendChild(el); setTimeout(() => el.remove(), 3200);
}

// ══════════════════════════════════════════════════
//  KEYBOARD
// ══════════════════════════════════════════════════
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal-bg.open').forEach(m => m.classList.remove('open'));
});

// ══════════════════════════════════════════════════
//  GLOBAL POLLING
// ══════════════════════════════════════════════════
setInterval(() => {
  refreshNavBalance();
  checkOutbidNotifications();
  updateStats();
}, 2500);

// ══════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════
updateUI();
