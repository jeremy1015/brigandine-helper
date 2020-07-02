// eslint-disable-next-line no-prototype-builtins
export default (i, o) => (s = i, a) => ((o.hasOwnProperty(a.type)) ? o[a.type](s, a) : s);
