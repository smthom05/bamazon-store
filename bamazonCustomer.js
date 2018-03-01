const mysql = require('mysql');
const inquirer = require('inquirer');
const connection = require('./connection.js')
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as user id: " + connection.threadId + "\n");
  start();
});
const database = {
  // create: function(){
  // },
  read: function(selector = "*", place = "products") {
    // selector = typeof selector !== "undefined" ? selector: "*";
    // place = typeof place !== "undefined" ? place: "products";
    // const queryString= "SELECT " + selector + " FROM " + place;
    const queryString = `SELECT ${selector} FROM ${place}`;
    return new Promise(function(resolve, reject) {
      connection.query(queryString, function(err, res) {
        if (err)
          reject(err);
        else if (!res) {
          console.log("No Results");
        } else {
          resolve(res);
        };
      });
    });
  },
  update: function(qty, id, column = "stock_quantity", place = "products", ) {
    const queryString = `UPDATE ${place} SET ${column} = ${qty} WHERE item_id= ${id}`;
    return new Promise(function(resolve, reject) {
      connection.query(queryString, function(err, res) {
        if (err)
          reject(err);
        else if (!res) {
          console.log("No Results");
        } else {
          resolve(res);
        };
      });
    });
  },
};

function start() {
  inquirer.prompt([{
    name: "intro",
    type: "list",
    choices: ["Yes Please!", "No Thank You!"],
    message: "Would you like to purchase an item?"
  }]).then(function(answer) {
    if (answer.intro === "Yes Please!") {
      queryAllProducts();
    } else {
      connection.end();
      console.log("Thank you, come again!");
    };
  });
}

function queryAllProducts() {
  connection.query("SELECT * FROM products", function(err, results) {
    console.log("_________________________________________");
    console.log("\n" + "      AVAILABLE PRODUCTS FOR SALE:");
    console.log("_________________________________________");
    for (var i = 0; i < results.length; i++) {
      console.log("\nProduct Id: " + results[i].item_id +
        "\nProduct Name: " + results[i].product_name +
        "\nDepartment Name: " + results[i].department_name +
        "\nPrice: $" + results[i].price.toFixed(2) +
        "\n");
      console.log(".........................................\n");
    };
    setTimeout(() => {
      purchaseProductId(results);
    }, 20);
  });
};

function purchaseProductId(products) {
  console.log("\n");
  inquirer
    .prompt([{
        name: "id",
        type: "list",
        choices: function() {
          var choiceArray = [];
          for (var i = 0; i < products.length; i++) {
            choiceArray.push(`${products[i].item_id} ${products[i].product_name}`);
          };
          return choiceArray;
        },
        message: "Please choose the item you would like to purchase: "
      },
      {
        name: "quantity",
        type: "input",
        message: "How many of the item would you like to buy?"
      }
    ]).then(function(answer) {
      const ans = answer.id;
      const currentId = answer.id.split(' ');
      var updatedQuantity = parseInt(products[parseInt(currentId[0] - 1)].stock_quantity - answer.quantity);
      const total = answer.quantity * parseFloat(products[currentId[0] - 1].price);

      if (updatedQuantity >= 0) {
        database.update(updatedQuantity, parseInt(currentId[0]));
        console.log("****************************************");
        console.log(`\nThank you for purchasing:\n${ans.slice(2)}\n`);
        console.log("****************************************");
        console.log(`\nHere is the quantity you purchased:\n${answer.quantity}\n`);
        console.log("****************************************");
        console.log(`\nHere is your total cost for the item(s) you purchased:\n$${total.toFixed(2)}.\n`);
        console.log("****************************************");
      } else {
        console.log("Unfortunately, we cannot fufill your order at this time due to insufficient item in stock.\n");
        inquirer.prompt([{
          name: "newOrder",
          type: "list",
          choices: ["Yes", "No"],
          message: "Would you like to start over?"
        }]).then(function(answer) {
          if (answer.newOrder === "Yes") {
            start();
          } else {
            connection.end();
            console.log("Please come back again!");
          }
        })
      };
    });
};
