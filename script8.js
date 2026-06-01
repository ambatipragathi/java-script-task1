let apiLink = "https://fakestoreapi.com/products";

fetch(apiLink).then((data)=>{return data.json()})
//Task 1: Print All Products
.then((products)=>{
    products.forEach(product => {
        console.log("Title :",product.title);
        console.log("Price :", product.price);
    });

    return products;
   
})

//Task 2: Print Only Product Titles
.then((products)=>{
    products.map((c,i)=>{
    console.log(c.title,i+1);
})
    return products
})
//Task 3: Print Total Products
.then((products)=>{
    console.log("Total Products :", products.length);
    return products
})

//Task 4: Print All Categories
.then ((products)=>{
    products.forEach(product =>{
        console.log(product.category);
    })

    return products
})


//Task 5: Print Products Above $50

.then ((products)=>{
    let filterproduct = products.filter((product) =>{
        
        return product.price > 50
        
    })
    filterproduct.forEach((product)=>{
        console.log(product.title , "-" , product.price);
        
    })
    return products
})

// Task 6: Print Products Below $50

.then((products) => {

    let low = products.filter((product) => {

        return product.price < 50;

    });

    low.forEach((product) => {

        console.log(product.title, "-", product.price);

    });
    return products
})

//Task 7: Find First Product Above $100

.then((products)=>{
    let above = products.find((product)=>{
            return product.price > 100
            
        }) 
        console.log("First Product Above $100",above);
        return products
        
})

//Task 8: Search Product
.then((products)=>{
    let searchText = "shirt";
    let search = products.filter((product)=>{
        return product.title.toLowerCase()
        .includes(searchText.toLowerCase())
    })
    search.forEach((product)=>{
        console.log(product.title);
        
    })

   return products
})
//Task 9: Count Electronics Products

.then((products)=>{
    let elec_total = products.filter((product)=>{
        return product.category.includes("electronics")
    })
        console.log("Electronics Products  Count",elec_total.length);
        return products
        
})

//Task 10: Print Highest Price Product
.then((products)=>{
    products.sort((a,b)=>{
        return b.price-a.price
    })
    console.log("Highest Price Product", products[0]);
    return products
})

//Task 11: Print Lowest Price Product
.then ((products)=>{
    let lowest = products.reduce((low,product)=>{
        if (product.price < low.price) {
            return product
        }
        else{
            return low
        }
        
    })
    console.log("Lowest Price Product", lowest);
    return products
})

//Calculate Total Price of All Products

.then
((products)=>{
    let total = products.reduce((sum,product)=>{

        return sum+product.price
    },0)
    console.log("Total Price of All Products" , total);
    return products
})

//Task 13: Calculate Average Product Price
.then
((products)=>{
    let total = products.reduce((sum,product)=>{

        return sum+product.price
    },0)
    let average = total / products.length;

    console.log("Average Price :", average.toFixed(2));
    return products
})

//Task 14: Print Product With Highest Rating

.then((products)=>{
    let highrate = products.reduce((high,product)=>{
        if(product.rating.rate > high.rating.rate){
            return product
        }
        else{
            return high
        }
    })
    console.log("Product With Highest Rating");
    console.log("Tilte :", highrate.title);
    console.log("Rating :" , highrate.rating.rate);
    return products
})

//Task 15: Print Product With Lowest Rating

.then((products)=>{
    let lowest = products.sort((a,b)=>{
        return a.rating.rate - b.rating.rate
    }) 
    console.log("Product With Lowest Rating");
    console.log("Tilte :", lowest[0].title);
    console.log("Rating :" , lowest[0].rating.rate);
    return products
})

//Task 16: Category Wise Product Count
.then((products)=>{
    let result = products.reduce((count,product)=>{
        let category = product.category
        count[category] = (count[category] || 0) + 1
        return count
    },{})
     for(let category in result){

        console.log(category, ":", result[category]);

    }
    return products
})

//Task 17: Create Discounted Products

.then((products)=>{
    let discount = products.map((product)=>{
        return {
             title: product.title,
             oldPrice: product.price,
            newPrice: (product.price * 0.9).toFixed(2)
        }
    })
    console.log(discount);
    return products
})

//Task 18: Sort Products Low To High

.then ((products)=>{
    let result = products.sort((a,b)=>{
        return a.price - b.price
    })
    console.log(result);
    return products
    
})

//Task 19: Sort Products High To Low

.then ((products)=>{
    let result = products.sort((a,b)=>{
        return b.price - a.price
    })
    console.log(result);
    return products
})

//Task 20: Check Any Product Above $500
.then ((products)=>{
    let result = products.some((product)=>{
       return ( product.price > 500);
    })
    console.log(result);
    return products
})

//Task 21: Check All Products Above Rating 3
.then ((products)=>{
    let result = products.every((product)=>{
       return ( product.rating.rate >3 );
    })
    console.log(result);
    return products
})

//Task 22: Print Top 5 Costliest Products

.then ((products)=>{
    let sortproduct = products.sort((a,b)=>{
        return b.price - a.price
    })
    let top = sortproduct.slice(0,5)
    console.log("-----------------Top 5 Costliest Products--------------");
    
    top.forEach((product)=>{
        console.log(product.title);
        
    })
    return products
})

//Task 23: Print Top 5 Rated Products

.then ((products)=>{
    let sortproduct = products.sort((a,b)=>{
        return b.rating.rate - a.rating.rate
    })
    let top = sortproduct.slice(0,5)
    console.log("----------------Top 5 Rated Products---------------");
    top.forEach((product)=>{
        console.log(product.title);
        
    })
    return products
})

//Task 24: Group Products By Category

.then((products)=>{
    let groupcategory = products.reduce((group,product)=>{
        let category = product.category
                if(!group[category]){
            group[category] = [];
        }

         group[category].push(product);
         return group
    },{})
    console.log(groupcategory);
    return products
    
})

//Task 25: Convert Product Prices To INR

.then((products)=>{
    let inr = products.map((product)=>{
       return{
        title : product.title,
        Price : product.price*85
       }
        
    })
    console.log("--------------Product Prices To INR-------------");
    console.log(inr);  
    return products
    
})

//Task 26: Amazon Product Filter

.then((products)=>{

    let filteredProducts = products.filter((product)=>{

        return (
            product.price < 500 &&
            product.rating.rate > 4 &&
            product.category === "electronics"
        );

    });

    filteredProducts.forEach((product)=>{

        console.log("Title :", product.title);

        console.log("Price :", product.price);

        console.log("Rating :", product.rating.rate);

        console.log("Category :", product.category);

        console.log("----------------------");

    });
    return products
})

//Task 27: Best Seller Product

.then((products)=>{

    let bestSeller = products.reduce((high, product)=>{

        if(product.rating.rate > high.rating.rate){

            return product;

        }
        else{

            return high;

        }

    });

    console.log("Best Seller Product");

    console.log("Title :", bestSeller.title);

    console.log("Rating :", bestSeller.rating.rate);

    return products

})

//Task 28: Product Analytics Dashboard

.then((products)=>{

    // Total Products
    let totalProducts = products.length;

    // Total Categories
    let categories = [...new Set(products.map((product)=>{
        return product.category;
    }))];

    let totalCategories = categories.length;

    // Highest Price Product
    let highestProduct = products.reduce((high, product)=>{

        if(product.price > high.price){
            return product;
        }
        else{
            return high;
        }

    });

    // Lowest Price Product
    let lowestProduct = products.reduce((low, product)=>{

        if(product.price < low.price){
            return product;
        }
        else{
            return low;
        }

    });

    // Average Price
    let totalPrice = products.reduce((sum, product)=>{

        return sum + product.price;

    }, 0);

    let averagePrice = totalPrice / products.length;

    // Best Rated Product
    let bestRated = products.reduce((high, product)=>{

        if(product.rating.rate > high.rating.rate){
            return product;
        }
        else{
            return high;
        }

    });

    // Output
    console.log("Total Products :", totalProducts);

    console.log("Total Categories :", totalCategories);

    console.log("Highest Price Product :", highestProduct.title);

    console.log("Lowest Price Product :", lowestProduct.title);

    console.log("Average Price :", averagePrice.toFixed(2));

    console.log("Best Rated Product :", bestRated.title);

    return products

})

//Task 29: Inventory Report

.then((products)=>{

    // Expensive Products (>100)
    let expensiveProducts = products.filter((product)=>{
        return product.price > 100;
    });

    // Affordable Products (<=100)
    let affordableProducts = products.filter((product)=>{
        return product.price <= 100;
    });

    // Electronics
    let electronics = products.filter((product)=>{
        return product.category === "electronics";
    });

    // Jewellery
    let jewellery = products.filter((product)=>{
        return product.category === "jewelery";
    });

    // Mens Clothing
    let mensClothing = products.filter((product)=>{
        return product.category === "men's clothing";
    });

    // Womens Clothing
    let womensClothing = products.filter((product)=>{
        return product.category === "women's clothing";
    });

    // Output
    console.log("Expensive Products :", expensiveProducts.length);

    console.log("Affordable Products :", affordableProducts.length);

    console.log("Electronics :", electronics.length);

    console.log("Jewellery :", jewellery.length);

    console.log("Mens Clothing :", mensClothing.length);

    console.log("Womens Clothing :", womensClothing.length);

});

//Task 30: Complete Admin Dashboard (Interview Level)


fetch("https://fakestoreapi.com/products")

.then((data)=>{
    return data.json();
})

.then((products)=>{

    console.log("==============================");

    // TOTAL PRODUCTS
    let totalProducts = products.length;

    // TOTAL CATEGORIES
    let categories = [...new Set(products.map((product)=>{
        return product.category;
    }))];

    let totalCategories = categories.length;

    // TOTAL PRICE
    let totalPrice = products.reduce((sum, product)=>{
        return sum + product.price;
    }, 0);

    // AVERAGE PRICE
    let averagePrice = totalPrice / totalProducts;

    // HIGHEST PRICE PRODUCT
    let highestProduct = products.reduce((high, product)=>{

        if(product.price > high.price){
            return product;
        }
        else{
            return high;
        }

    });

    // LOWEST PRICE PRODUCT
    let lowestProduct = products.reduce((low, product)=>{

        if(product.price < low.price){
            return product;
        }
        else{
            return low;
        }

    });

    // BEST RATED PRODUCT
    let bestRated = products.reduce((high, product)=>{

        if(product.rating.rate > high.rating.rate){
            return product;
        }
        else{
            return high;
        }

    });

    // LOWEST RATED PRODUCT
    let lowestRated = products.reduce((low, product)=>{

        if(product.rating.rate < low.rating.rate){
            return product;
        }
        else{
            return low;
        }

    });

    // PRODUCTS ABOVE $100
    let above100 = products.filter((product)=>{
        return product.price > 100;
    });

    // PRODUCTS BELOW $50
    let below50 = products.filter((product)=>{
        return product.price < 50;
    });

    // CATEGORY COUNTS
    let categoryCounts = products.reduce((count, product)=>{

        let category = product.category;

        count[category] = (count[category] || 0) + 1;

        return count;

    }, {});

    // OUTPUT
    console.log("TOTAL PRODUCTS :", totalProducts);

    console.log("TOTAL CATEGORIES :", totalCategories);

    console.log("TOTAL PRICE :", totalPrice.toFixed(2));

    console.log("AVERAGE PRICE :", averagePrice.toFixed(2));

    console.log("");

    console.log("HIGHEST PRICE PRODUCT :", highestProduct.title);

    console.log("LOWEST PRICE PRODUCT :", lowestProduct.title);

    console.log("");

    console.log("BEST RATED PRODUCT :", bestRated.title);

    console.log("LOWEST RATED PRODUCT :", lowestRated.title);

    console.log("");

    console.log("PRODUCTS ABOVE $100 :", above100.length);

    console.log("PRODUCTS BELOW $50 :", below50.length);

    console.log("");

    console.log("CATEGORY COUNTS :");

    for(let category in categoryCounts){

        console.log(category, ":", categoryCounts[category]);

    }

    console.log("==============================");

})
.catch((error)=>{
    console.log("Error :", error);
})
.finally(()=>{
    console.log("Fetch Completed");
});