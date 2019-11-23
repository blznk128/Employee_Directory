module.exports = (sequelize, DataTypes) => {
    let Employee = sequelize.define("Employee", {
        first_Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wage: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // hire_Date: {
        //     type: DataTypes.DATE,
        //     allowNull: true
        // }
    });

    return Employee;
}