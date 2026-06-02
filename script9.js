const productsContainer = document.querySelector(".products");
const stats = document.querySelector(".stats");
const errorDiv = document.querySelector(".error");
const finalDiv = document.querySelector(".final");

fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json();
    })
    .then((products) => {

        stats.textContent = `Total Products: ${products.length}`;

        products.forEach((product) => {

            // Card
            const card = document.createElement("div");
            card.setAttribute("class", "card");

            // Image
            const image = document.createElement("img");
            image.setAttribute("src", product.image);
            image.setAttribute("alt", product.title);

            // Title
            const title = document.createElement("h3");

            if(product.title.length > 30){
                title.textContent = product.title.slice(0,30) + "...";
            }else{
                title.textContent = product.title;
            }

            // Price
            const price = document.createElement("p");
            price.textContent = `Price: $${product.price}`;

            // Category
            const category = document.createElement("p");
            category.textContent = `Category: ${product.category}`;

            // Description
            const description = document.createElement("p");

            if(product.description.length > 50){
                description.textContent =
                product.description.slice(0,50) + "...";
            }else{
                description.textContent = product.description;
            }

            // Product Tag
            const tag = document.createElement("span");
            tag.setAttribute("class","tag");

            if(product.price > 100){
                tag.textContent = "Expensive Product";
                tag.setAttribute("class","tag expensive");
            }else{
                tag.textContent = "Budget Product";
                tag.setAttribute("class","tag budget");
            }

            // Buttons Container
            const btnGroup = document.createElement("div");
            btnGroup.setAttribute("class","btn-group");

            // Show Price Button
            const priceBtn = document.createElement("button");
            priceBtn.textContent = "Show Price";

            priceBtn.addEventListener("click", () => {
                alert(product.price);
            });

            // Show Category Button
            const categoryBtn = document.createElement("button");
            categoryBtn.textContent = "Show Category";

            categoryBtn.addEventListener("click", () => {
                alert(product.category);
            });

            // View Details Button
            const detailsBtn = document.createElement("button");
            detailsBtn.textContent = "View Details";

            detailsBtn.addEventListener("click", () => {
                alert(
                    `Title: ${product.title}
Price: $${product.price}
Category: ${product.category}`
                );
            });

            btnGroup.append(
                priceBtn,
                categoryBtn,
                detailsBtn
            );

            card.append(
                image,
                title,
                price,
                category,
                description,
                tag,
                btnGroup
            );

            productsContainer.append(card);
        });

    })
    .catch(() => {

        errorDiv.textContent = "Something Went Wrong";

        errorDiv.style.backgroundColor = "red";
        errorDiv.style.color = "white";
        errorDiv.style.textAlign = "center";
        errorDiv.style.padding = "10px";
    })
    .finally(() => {

        finalDiv.textContent =
            "API Request Completed Successfully";
    });