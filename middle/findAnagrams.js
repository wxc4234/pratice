var findAnagrams = function (s, p) {
  const res = [];
  const n = p.length,
    m = s.length;
  if (n > m) {
    return [];
  }
  const cnt = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    --cnt[p[i].charCodeAt() - "a".charCodeAt()];
    ++cnt[s[i].charCodeAt() - "a".charCodeAt()];
  }
  let diff = 0;
  for (const c of cnt) {
    if (c !== 0) {
      diff++;
    }
  }
  if (diff === 0) {
    res.push(0);
  }
  for (let i = n; i < m; i++) {
    let x = s[i].charCodeAt() - "a".charCodeAt(),
      y = s[i - n].charCodeAt() - "a".charCodeAt();
    if (cnt[x] === 0) {
      diff++;
    }
    cnt[x]++;
    if (cnt[x] === 0) {
      diff--;
    }
    if (cnt[y] === 0) {
      diff++;
    }
    cnt[y]--;
    if (cnt[y] === 0) {
      diff--;
    }
    if (diff === 0) {
      res.push(i - n + 1);
    }
  }
  return res;
};
