# Eventify Project - Web Application Course

## Preview Version

In this version of Eventify project, the application will be able to create, update and delete quotes orders.

### Create Quote Order

The process of create a quote order is define the main information of the event:

* Client
* Type of event
* Address of event location
* Date of event
* Quantity of guests
* Services List
* Total Price

Besides, each quote order have a unique identifier. This identifier is generated automatically when the event organizer start the process of create a quote order.

### Create a Service Item

In addition, **the services list** is an array of many **service items** objects. This kind of object has the following structure:

* Description
* Quantity
* Unit Price
* Total Price

Besides, each service item have a unique identifier. This identifier is generated when the event organizer start the process of create a service into a quote order. 

Also, it is created into the database when the organizer create the quote order. Before that, **the service list** is dropped when the organizer cancel the quote order

### Update Quote Order

This action is performed when the organizer has to correct a specific detail such as:

* Change location of event
* Change date of event
* Add, update or delete a service item

### Update Service List

Besides, **the service list** just is updated when the event organizer update the quote order

Into the service list, the event organizer can:

* Update service items
* Delete service items
* Add service items

This changes will be performed when the organizer finalize the update of quote order. Before that, the changes just will be shown into the update form and will be deleted when the update process is cancelled.

### Delete Quote Order

This action will be performed when the organizer decides.

Also, when a quote order is deleted, the service list associated with the quote order will be deleted too


### Get Quote Order

Finally, the application shown all quotes order registered into the database.

For that, the quotes management page will use a table

### Quoter Order View

Eventify have a view interface to show all information of the quote.

It's just to view the details of quote order. The interface don't offer options to update or deleted the information.

It just offers options to export to PDF or send to a client **(Event host)** into the application.