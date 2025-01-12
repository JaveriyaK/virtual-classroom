const jwt = require('jsonwebtoken');

const auth = (role) => (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).send('Access denied');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    if (role && role !== decoded.role) return res.status(403).send('Access forbidden');
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
};

module.exports = auth;
