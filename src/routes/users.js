module.exports = () => {
  const findAll = (req, res) => {
    const users = [
      { name: 'Gisele', mail: 'gisele@gmail' },
    ];
    res.status(200).json(users);
  };

  const create = ('/users', (req, res) => {
    res.status(201).json(req.body);
  });

  return { findAll, create };
};
