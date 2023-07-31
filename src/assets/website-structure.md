### Why?

I think it's easier to read the body DOM structure in HTML rather than inspecting JS modules. 
If needed, it can be used to analyze the webpage structure.

```
<body>
    <div id="content">
   
        <div class="phone-menu invisible">
            <img src="imgs/x.png" alt="X icon" id="x-icon">
            <h1>Roberto's</h1>
            <ul>
                <li><a href="#home" class="uppercase">Home</a></li>
                <li><a href="#about-us" class="uppercase">About us</a></li>
                <li><a href="#menu" class="uppercase">Menu</a></li>
                <li><a href="#contacts" class="uppercase">Contacts</a></li>
            </ul>
        </div>
  
        <nav>
            <a href="#home" id="nav-logo">Roberto's</a>
            <img src="imgs/icon-menu.png" alt="Hamburger menu" id="hamburger-menu">
            <div id="nav-links">
                <ul>
                    <li><a href="#home" class="uppercase">Home</a></li>
                    <li><a href="#about-us" class="uppercase">About us</a></li>
                    <li><a href="#menu" class="uppercase">Menu</a></li>
                    <li><a href="#contacts" class="uppercase">Contacts</a></li>
                </ul>
            </div>
        </nav>
   
        <section id="home">
            <div class="hero-section">
                <div>
                    <h1 id="pizzeria">pizzeria</h1>
                    <h1 id="main-logo">Roberto's</h1>
                </div>
                <a href="#about-us"><img src="imgs/arrow-down-sign.png" alt="Arrow down" id="arrow"></a>
            </div>
        </section>
 
        <section id="about-us">
            <div class="description">
                <h1>Russo Family</h1>
                <p>
                    Originally tomatoes farmers in the south of Italy, the Russo family
                    opened their first restaurant in their beautiful Campania. <br>
                    Forced by the ‘800s crisis, all the family moved to the US in 1850
                    where they reopened a new restaurant with high quality dishes.
                </p>
                <a href="#">Read more...</a>
            </div>
            <div class="images">
                <img src="imgs/tomatoes.png" alt="Tomatoes">
                <img src="imgs/mozzarella.png" alt="Mozzarella">
            </div>
        </section>

        <section id="menu">
            <div class="description">
                <h1>Our menu</h1>
                <p>
                    The whole family does care about the quality and variety of the
                    dishes. <br>
                    As a matter of fact, the ingredients are all selected by granpa
                    Roberto in person. <br>
                    The menu has plenty of options for any flavour.
                </p>
                <a href="#">View menu...</a>
            </div>
            <div class="images menu-imgs">
                <img src="imgs/salame-pizza.png" alt="Salami pizza">
                <img src="imgs/margherita-pizza.png" alt="Margherita pizza">
            </div>
        </section>
    
       <div class="last-section">
            <section id="contacts">
                <h1 class="uppercase">Contacts</h1>
                <div class="contact-type">
                    <div class="contact">
                        <p class="contact-title bold">Phone contact</p>
                        <p class="contact-info">+1 234 567 890</p>
                    </div>
                    <div class="contact">
                        <p class="contact-title bold">Email</p>
                        <p class="contact-info">pizzeriarobertos@mail.us</p>
                    </div>
                    <div class="contact">
                        <p class="contact-title bold">Address</p>
                        <p class="contact-info">San Francisco, Beautyland 25</p>
                    </div>
                </div>
            </section>
       
            <footer>
                <p>&copy2023 - Roberto's</p>
            </footer>
        </div>
    
    </div>
</body>
```