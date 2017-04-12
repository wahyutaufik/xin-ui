module.exports = function (content) {
  let meta = {};
  let restStart = 0;
  let splitted = content.trim().split('\n');
  splitted.find((line, no) => {
    line = line.trim();
    if (no === 0) {
      return line !== '---';
    }

    if (line === '---') {
      restStart = no + 1;
      return true;
    }

    let [ key, ...value ] = line.split(':');
    meta[key.trim()] = value.join(':').trim();
  });

  content = splitted.slice(restStart).join('\n');

  return { meta, content };
};
