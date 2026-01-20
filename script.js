document.addEventListener('DOMContentLoaded', () => {

    const burger = document.getElementById('burgerBtn');
    const nav = document.getElementById('navMenu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }   );  
    const menuContainer = document.getElementById('menuContainer');
    
    const mockData = [
        { id: 1, name: "Burger", price: 10.00, img: "images/burger.jpg", rating: 4.9 },
        { id: 2, name: "pizza", price: 15.50, img: "images/pizza.jpg", rating: 5.0 },
        { id: 3, name: "pasta", price: 12.00, img: "images/pasta.jpg", rating: 4.8 },
        { id: 4, name: "combo", price: 20.00, img: "images/combo.jpg", rating: 5.0 },
        { id: 5, name: "coffee", price: 5.50, img: "images/coffee.jpg", rating: 4.6 },
        { id: 6, name: "fruits", price: 6.99, img: "images/fruits.jpg", rating: 4.9 },
        { id: 7, name: "puddings", price: 4.99, img: "images/puddings.jpg", rating: 4.7 },
        { id: 8, name: "sushi", price: 15.00, img: "images/sushi.jpg", rating: 4.9 },
        { id: 9, name: "smoothies", price: 8.50, img: "images/smoothies.jpg", rating: 4.5 },
        { id: 10, name: "toasts", price: 9.00, img: "images/toasts.jpg", rating: 4.8 },
        { id: 11, name: "sandwich", price: 7.00, img: "images/sandwich.jpg", rating: 4.7 },
        { id: 12, name: "pancake", price: 4.00, img: "images/pancake.jpg", rating: 4.9 },
        { id: 13, name: "tea", price: 3.50, img: "images/tea.jpg", rating: 4.6 },
        { id: 14, name: "fries", price: 7.00, img: "images/fries.jpg", rating: 4.8 },
        { id: 15, name: "cake", price: 6.50, img: "images/cake.jpg", rating: 4.9 },
        { id: 16, name: "healthy_bowl", price: 9.99, img: "images/healthy_bowl.jpg", rating: 5.0 },
        { id: 17, name: "burger_fries", price: 15.50, img: "images/burger_fries.jpg", rating: 4.9},
        { id: 18, name: "avocado_toast", price: 5.50, img: "images/avocado_toast.jpg", rating: 4.8 },
        { id: 19, name: "caesar_salad", price: 8.00, img: "images/caesar_salad.jpg", rating: 4.7 },
        { id: 20, name: "chicken_wings", price: 9.00, img: "images/chicken_wings.jpg", rating: 4.9 },
        { id: 21, name: "coca-cola", price: 2.50, img: "images/coca-cola.jpg", rating: 4.6 },
        { id: 22, name: "fish_steak", price: 9.50, img: "images/fish_steak.jpg", rating: 4.8 },
        { id: 23, name: "fruit_juices", price: 6.00, img: "images/fruit_juices.jpg", rating: 5.0},
        { id: 24, name: "greek_salad", price: 7.50, img: "images/greek_salad.jpg", rating: 4.9 },
        { id: 25, name: "healthy_bowl", price: 8.50, img: "images/healthy_bowl.jpg", rating: 4.8 }
    ];

    async function fetchFoodItems() {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
        
            menuContainer.innerHTML = '';

            mockData.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('food-card');
                card.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <div class="card-body">
                        <div class="card-header">
                            <h4>${item.name}</h4>
                            <span>⭐ ${item.rating}</span>
                        </div>
                        <div class="card-header">
                            <span class="price">$${item.price.toFixed(2)}</span>
                            <button class="add-btn" onclick="addToCart('${item.name}')">Add to Cart</button>
                        </div>
                    </div>
                `;
                menuContainer.appendChild(card);
            });

        } catch (error) {
            menuContainer.innerHTML = '<p style="color:red">Failed to load menu items.</p>';
            console.error(error);
        }
    }

    fetchFoodItems();
    const regForm = document.getElementById('regForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const togglePass = document.getElementById('togglePass');

    togglePass.addEventListener('click', () => {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        togglePass.textContent = type === 'password' ? '👁️' : '🙈';
    });

    regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const userRegex = /^[a-zA-Z0-9]{3,}$/;
        if(!userRegex.test(username.value)) {
            showError(username);
            isValid = false;
        } else {
            hideError(username);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email.value)) {
            showError(email);
            isValid = false;
        } else {
            hideError(email);
        }

        const passRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
        if(!passRegex.test(password.value)) {
            showError(password);
            isValid = false;
        } else {
            hideError(password);
        }

        if(isValid) {
            alert('Registration Successful! 🎉');
            regForm.reset();
        }
    });

    function showError(input) {
        const errorMsg = input.parentElement.querySelector('.error');
        errorMsg.style.display = 'block';
        input.style.borderColor = 'red';
    }

    function hideError(input) {
        const errorMsg = input.parentElement.querySelector('.error');
        errorMsg.style.display = 'none';
        input.style.borderColor = '#ddd';
    }

    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.classList.remove('hidden');
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.add('hidden');
    });

});

function addToCart(itemName) {
    const badge = document.getElementById('cartCount');
    let count = parseInt(badge.innerText);
    badge.innerText = count + 1;
    alert(`${itemName} added to cart!`);
}