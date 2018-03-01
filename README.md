# Bamazon

## *Overview*
Bamazon is an Amazon-like CLI application built using JavaScript, Node.js, MySQL, and the Inquirer NPM package. It allows for three different levels of users:
* Customers
* Mangers
  * Version 2.0
* Supervisors
  * Version 3.0

## *Customer Experience*
1. The customer will come to the application and be prompted whether or not they would like to to purchase an item.
![Initial Prompt](/assets/Customer-Images/Initial-Prompt.png)

1. If the customer selects "No Thank You!", they will exited out of the application.
![No to Prompt](/assets/Customer-Images/Initial-Prompt-No.png)

1. If the customer selects "Yes Please!", they will be provided with a list of all currently available products for purchase.
![Available Products 1](/assets/Customer-Images/Available-Products-1.png)
![Available Products 2](/assets/Customer-Images/Available-Products-2.png)

1. After using the up and down keys to make their selection, the customer is asked for the quantity they would like to purchase.
![Customer Selection](/assets/Customer-Images/Customer-Selection.png)

1. If the customer attempts to buy a larger quantity than Bamazon has in stock, they will be notified of the insufficient quantity and prompted to start over.
![insufficient Quantity](/assets/Customer-Images/insufficient-Quantity.png)

1. Lastly, if the customer orders an appropriate quantity, they are shown their order summary, which consists of the product, quantity, and grand total.
![Order Summary](/assets/Customer-Images/Order-Summary.png)

## _MySQL Experience_
1. The product database is updated in real time when a user makes a purchase. Below are the products database before an after our Chumbawamba CD purchase.
![Inventory Pre-Purchase](/assets/Customer-Images/Inventory-Pre-Purchase.png)
![Inventory Post-Purchase](/assets/Customer-Images/Inventory-Post-Purchase.png)

## *Manager Experience*
  Coming soon...

## *Supervisor Experience*
  Coming soon...
