import { Injectable } from '@angular/core';
import { QueriesUitvoerenModel, QueriesUitvoerenModelInterface } from '../models/queries-uitvoeren.model'

@Injectable({
  providedIn: 'root'
})
export class QueriesUitvoerenService {

  constructor() { }

  async getQueries(): Promise<QueriesUitvoerenModel> {
    
        /*
    
      try {
    
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        
        if (!response.ok) {
    
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    
        }
        
        const data = await response.json();
     
        const dashboardModel = new DashboardModel(
          data.deveui,
          data.waarde,
          new Date(data.tijdstempel)
        );
    
        */
    
        const queriesUitvoerenModel: QueriesUitvoerenModelInterface = {
        "persoon": "Jan Janssen",
          "metadata": {
          "2024-12-15T00:00:00Z": "SELECT first_name, last_name, job_title, department FROM employees WHERE salary > 50000;",
          "2024-12-15T00:30:00Z": "INSERT INTO products (product_name, category, price, stock_quantity) VALUES ('Wireless Headphones', 'Electronics', 89.99, 120);",
          "2024-12-15T01:00:00Z": "UPDATE customers SET email = 'new_email@example.com' WHERE customer_id = 101;",
          "2024-12-15T01:30:00Z": "DELETE FROM orders WHERE order_date < DATEADD(YEAR, -5, GETDATE());",
          "2024-12-15T02:00:00Z": "SELECT product_id, product_name, SUM(quantity_sold) AS total_sold FROM sales GROUP BY product_id, product_name ORDER BY total_sold DESC LIMIT 5;",
      }
        };
    
        return queriesUitvoerenModel
    
      }
  
      /*
   
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  
    */

}
