console.log("swift cart");

const loadCategories = ()=>{
    fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        displayCategories(data);
    });
};

const displayCategories =(categories)=>{
    const levelCategories = document.getElementById("categorie-div");
    levelCategories.innerHTML = "";
    console.log(categories);
    
    const allBtn = document.createElement("button");
    allBtn.className = "btn btn-sm rounded-full bg-indigo-600 text-white border-none";
    allBtn.innerText = "All";
    levelCategories.appendChild(allBtn);

    categories.forEach((category) => {
        const btn = document.createElement("button");
        btn.className = "btn btn-sm rounded-full";
        btn.innerText = `${category}`;

        levelCategories.appendChild(btn);
    });
};


const loadAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            displayProducts(data);
        });
};

const displayProducts = (products) => {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    products.forEach((product) => {

        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow hover:shadow-lg transition duration-300";

        card.innerHTML =`
            <figure class="p-6 bg-gray-100">
                <img src="${product.image}"
                    class="h-56 object-contain" />
            </figure>

            <div class="card-body">

                <div class="flex justify-between items-center text-sm">
                    <span class="badge badge-outline text-indigo-600 capitalize">
                        ${product.category}
                    </span>

                    <div class="flex items-center gap-1">
                        <i class="fa-solid fa-star text-yellow-500"></i>
                        <span class="font-medium">${product.rating.rate}</span>
                        <span class="text-gray-400 text-xs">
                            (${product.rating.count})
                        </span>
                    </div>
                </div>

                <h3 class="font-semibold text-base line-clamp-2">
                    ${product.title}
                </h3>

                <p class="text-lg font-bold">$${product.price}</p>

                <div class="card-actions mt-3">
                    <button class="btn btn-outline btn-sm flex-1">
                        <i class="fa-regular fa-eye"></i> Details
                    </button>
                    <button class="btn btn-primary btn-sm flex-1">
                        <i class="fa-solid fa-cart-plus"></i> Add
                    </button>
                </div>

            </div>
        `;
        container.appendChild(card);
    });
};



loadCategories();
loadAllProducts();

