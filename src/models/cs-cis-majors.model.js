module.exports = (sequelize, Sequelize) => {
  const CsCisMajors = sequelize.define("cs-cis-majors", {
    emplid: {
      type: Sequelize.STRING
    },
    first: {
      type: Sequelize.STRING
    },
    last: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    zip: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    cred: {
      type: Sequelize.STRING
    },
    gpa: {
      type: Sequelize.NUMBER
    },
    major: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
  });

  return CsCisMajors;
};