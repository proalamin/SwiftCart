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

    allBtn.addEventListener("click", () => {
        setActiveButton(allBtn);
        loadAllProducts();
    });

    levelCategories.appendChild(allBtn);

    categories.forEach((category) => {
        const btn = document.createElement("button");
        btn.className = "btn btn-sm rounded-full";
        btn.innerText = `${category}`;

        btn.addEventListener("click", () => {
            setActiveButton(btn);
            loadProductsByCategory(category);
        });

        levelCategories.appendChild(btn);
    });
};

const loadProductsByCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => {
            displayProducts(data);
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
                    <span class="badge bg-blue-100 text-indigo-700 capitalize">
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
                    <button onclick="loadProductDetails(${product.id})" class="btn btn-outline btn-sm flex-1">

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


const setActiveButton = (activeBtn) => {
    const buttons = document.querySelectorAll("#categorie-div button");

    buttons.forEach(btn => {
        btn.classList.remove("bg-indigo-600", "text-white", "border-none");
    });
    activeBtn.classList.add("bg-indigo-600", "text-white", "border-none");
};


const loadProductDetails = (id) => {

    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            displayModal(data);
        });

};


const displayModal = (product) => {

    const modalContent = document.getElementById("modal-content");

    modalContent.innerHTML = `
        <div class="grid md:grid-cols-2 gap-6 items-center">

            <div class="bg-gray-100 p-6 rounded-lg">
                <img src="${product.image}"
                     class="h-64 object-contain mx-auto" />
            </div>

            <div>
                <h2 class="text-xl font-bold mb-3">
                    ${product.title}
                </h2>

                <p class="text-gray-600 mb-4">
                    ${product.description}
                </p>

                <div class="flex items-center gap-2 mb-3">
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <span class="font-medium">${product.rating.rate}</span>
                    <span class="text-gray-400 text-sm">
                        (${product.rating.count} reviews)
                    </span>
                </div>

                <p class="text-2xl font-bold mb-4">
                    $${product.price}
                </p>

                <button class="btn btn-primary w-full">
                    <i class="fa-solid fa-cart-plus"></i>
                    Add to Cart
                </button>
            </div>

        </div>
    `;

    document.getElementById("product_modal").showModal();
};


const loadTrendingProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {

            const trending = data.slice(0, 6);

            displayTrendingProducts(trending);
        });
};

const displayTrendingProducts = (products) => {

    const container = document.getElementById("trending-container");
    container.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");
        card.className = "card bg-base-200 shadow-md hover:shadow-xl transition duration-300";

        card.innerHTML = `
            <figure class="p-6">
                <img src="${product.image}"
                    class="rounded-lg h-64 object-contain" />
            </figure>

            <div class="card-body pt-0">

                <div class="flex justify-between items-center mb-2">

                    <span class="badge bg-blue-200 text-blue-800 capitalize">
                        ${product.category}
                    </span>

                    <div class="text-sm flex items-center gap-1">
                        <i class="fa-solid fa-star text-yellow-500"></i>
                        <span class="font-medium">${product.rating.rate}</span>
                        <span class="text-gray-500">
                            (${product.rating.count})
                        </span>
                    </div>

                </div>

                <h3 class="font-semibold text-lg line-clamp-2">
                    ${product.title}
                </h3>

                <p class="text-xl font-bold mt-2">
                    $${product.price}
                </p>

                <div class="card-actions mt-4">
                    <button onclick="loadProductDetails(${product.id})"
                        class="btn btn-outline btn-sm flex-1">
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

loadTrendingProducts();
