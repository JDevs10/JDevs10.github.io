import { Utils } from "./utils.js";
const App = {
    myContainer:  document.getElementById('myContainer'),
    oldLogoImg: "https://picsum.photos/100/100",
    jlLogoImg: "img/JL-Logo.png",
    jLogoImg: "img/J-Logo.png",
    lLogoImg: "img/L-Logo.png",
    READY: false,
    ERROR: false,
    myTechCanvas: null,
    myThoughts: [
        "One who smiles rather than rages is always the stronger.",
        "Live more worry less.",
        "Do What You Love,\nLove What You Do.",
        "M.A.T.H.\nMental Abuse To Humans.",
        "Y.O.L.O.\nYou Only Live Once.",
        "Work Hard Play Hard.",
        "You got this",
        "I didn't come this far to only come this far."
    ],
    mainMenuNav: [
        {rel: "about", label: "About"},
        {rel: "skills", label: "My Skills"},
        {rel: "portfolio", label: "Portfolio"},
        {rel: "blog", label: "Blog"},
        {rel: "contact", label: "Contact"}
    ],
    mySocials: [
        {
            rel: "Instagram",
            link: "https://www.instagram.com/jeanlaurentduzant",
            svgWidth: 17,
            svgHeight: 17,
            svgStyles: "color: #dbdbdb;",
            svgViewBox: "0 0 16 16",
            svgPathD: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
        },
        {
            rel: "Linkedin",
            link: "https://www.linkedin.com/in/jean-laurent-duzant-580287171",
            svgWidth: 17,
            svgHeight: 17,
            svgStyles: "color: #dbdbdb;",
            svgViewBox: "0 0 16 16",
            svgPathD: "M 4.943 12.248 V 6.169 H 2.542 v 7.225 h 2.401 z m -1.2 -7.212 c 0.837 0 1.358 -0.554 1.358 -1.248 c -0.015 -0.709 -0.52 -1.248 -1.342 -1.248 c -0.822 0 -1.359 0.54 -1.359 1.248 c 0 0.694 0.521 1.248 1.327 1.248 h 0.016 z m 4.908 8.212 V 9.359 c 0 -0.216 0.016 -0.432 0.08 -0.586 c 0.173 -0.431 0.568 -0.878 1.232 -0.878 c 0.869 0 1.216 0.662 1.216 1.634 v 3.865 h 2.401 V 9.25 c 0 -2.22 -1.184 -3.252 -2.764 -3.252 c -1.274 0 -1.845 0.7 -2.165 1.193 v 0.025 h -0.016 a 5.54 5.54 0 0 0 0.016 -0.025 V 6.169 h -2.4 c 0.03 0.678 0 7.225 0 7.225 h 2.4 z M -1 5"
        },
        {
            rel: "GitHub",
            link: "https://github.com/JDevs10",
            svgWidth: 17,
            svgHeight: 17,
            svgStyles: "color: #dbdbdb;",
            svgViewBox: "0 0 16 16",
            svgPathD: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        },
        {
            rel: "CodePen",
            link: "https://codepen.io/jdevs10",
            svgWidth: 17,
            svgHeight: 17,
            svgStyles: "color: #dbdbdb;",
            svgViewBox: "0 0 16 16",
            svgPathD: "M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
        }
    ],
    init: function () {
        this.initIcon();
        this.initMenu();
        this.initH1H2s();
        this.initTechCanvas();
        this.initPortfolioWall();
        this.initWorkExperience();

        document.addEventListener('error', (event) => {
            window.location.href = "./404.html";
        });

        document.body.classList.add('window-loaded');
        App.READY = true;
    },
    initIcon: function () {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = App.jlLogoImg;
    },
    initMenu: function () {
        const myMenu = document.getElementById("myMenu");

        const headerMenu = document.createElement('div');
        headerMenu.classList.add('main-menu-top');
        const htlLogoLink = document.createElement('a');
        htlLogoLink.classList.add('logo');
        htlLogoLink.rel = "home";
        htlLogoLink.addEventListener('click', function() {
            App.loader.loadPage(`index.html`, 10);
        });
        htlLogoLink.style.cursor = 'pointer';
        const img = document.createElement('img');
        img.src=App.jlLogoImg;
        htlLogoLink.appendChild(img);
        htlLogoLink.appendChild(document.createElement('br'));
        const span1 = document.createElement('span');
        span1.innerHTML="Jean-Laurent";
        htlLogoLink.appendChild(span1);
        headerMenu.appendChild(htlLogoLink);
        headerMenu.appendChild(document.createElement('br'));
        const span2 = document.createElement('span');
        span2.innerHTML="Full-Stack Mobile Developer";
        headerMenu.appendChild(span2);
        myMenu.appendChild(headerMenu);

        const navContent = document.createElement('nav');
        navContent.classList.add('main-menu_nav');
        this.mainMenuNav.forEach(elem => {
            const btn = document.createElement('a');
            btn.addEventListener('click', function() {
                App.loader.loadPage(`${elem.rel}.html`);
            });
            btn.innerHTML = elem.label;
            btn.rel = elem.rel;
            btn.style.cursor = 'pointer';
            navContent.appendChild(btn);
        });
        myMenu.appendChild(navContent);

        const footerUl = document.createElement('ul');
        footerUl.classList.add('social');
        this.mySocials.forEach(item => {
            const footerLi = document.createElement('li');
            const htlSocialLink = document.createElement('a');
            htlSocialLink.rel = item.rel;
            htlSocialLink.href = item.link;
            htlSocialLink.target = "_blank";
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute('xmlns', "http://www.w3.org/2000/svg");
            svg.setAttribute('width', item.svgWidth);
            svg.setAttribute('height', item.svgHeight);
            svg.setAttribute('fill', "currentColor");
            svg.setAttribute('style', item.svgStyles);
            svg.setAttribute('viewBox', item.svgViewBox);
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute('d', item.svgPathD);
            svg.appendChild(path);
            htlSocialLink.appendChild(svg);
            footerLi.appendChild(htlSocialLink);
            footerUl.appendChild(footerLi);
        });
        myMenu.appendChild(footerUl);
    },
    initTechCanvas: function () {
        const myTechCanvas = document.getElementById("myTechCanvas");
        if (Utils.Function.empty(myTechCanvas)) {
            return;
        }
        // Add/change/move/remove tech from here
        const techList = [
            // Destop
            {name:"C#", value:78, url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"},
            {name:"Visual Studio", value:85, url: "https://visualstudio.microsoft.com"},
            // Mobile
            {name:"Android Studio", value:85, url: "https://developer.android.com/studio"},
            {name:"Java", value:78, url: "https://fr.wikipedia.org/wiki/Java_(langage)"},
            {name:"Kotlin", value:73, url: "https://kotlinlang.org"},
            {name:"React Native", value:90, url: "https://reactnative.dev"},
            {name:"Xcode", value:70, url: "https://developer.apple.com/xcode"},
            {name:"Swift", value:70, url: "https://www.apple.com/swift"},
            // Web
            {name:"HTML", value:80, url: "https://en.wikipedia.org/wiki/HTML"},
            {name:"CSS", value:80, url: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets"},
            {name:"JavaScript", value:80, url: "https://en.wikipedia.org/wiki/JavaScript"},
            {name:"TypeScript", value:85, url: "https://en.wikipedia.org/wiki/TypeScript"},
            {name:"Angular", value:83, url: "https://angular.io"},
            {name:"Bootstrap", value:70, url: "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"},
            {name:"Material Design", value:70, url: "https://m3.material.io"},
            {name:"NPM", value:70, url: "https://www.npmjs.com"},
            {name:"Node JS", value:85, url: "https://en.wikipedia.org/wiki/Node.js"},
            {name:"PHP", value:80, url: "https://en.wikipedia.org/wiki/PHP"},
            {name:"MYSQL", value:90, url: "https://www.mysql.com"},
            {name:"PostgreSQL", value:90, url: "https://www.postgresql.org"},
            {name:"REST", value:90, url: "https://en.wikipedia.org/wiki/Representational_state_transfer"},
            {name:"JSON", value:100, url: "https://en.wikipedia.org/wiki/JSON"},
            {name:"Git", value:78, url: "https://en.wikipedia.org/wiki/Git"}
        ];
        const techListElement = document.createElement('ul');
        techListElement.setAttribute('id', 'tags');
        techList.forEach(element => {
            const techListElementItem = document.createElement('li');
            const itemA = document.createElement('a');
            itemA.setAttribute('href', element.url);
            itemA.setAttribute('target', '_blank');
            itemA.innerHTML = element.name;
            techListElementItem.appendChild(itemA);
            techListElement.appendChild(techListElementItem);
        });
        myTechCanvas.appendChild(techListElement);
        App.myTechCanvas = myTechCanvas;
    },
    initH1H2s: function () {
        const h1h2Found = document.querySelectorAll("h1, h2");
        h1h2Found.forEach(elem => {
            const title = elem.ariaLabel ?? elem.attributes.getNamedItem('aria-label').value;
            
            const imgJ = document.createElement('img');
            imgJ.classList.add('blast');
            imgJ.classList.add('spin-me');
            imgJ.classList.add('animation-logo');
            imgJ.setAttribute('width', 50);
            imgJ.setAttribute('height', 70);
            imgJ.src = App.jLogoImg;
            imgJ.alt = "The J of Jean";
            
            const imgL = document.createElement('img');
            imgL.classList.add('blast');
            imgL.classList.add('spin-me');
            imgL.classList.add('animation-logo');
            imgL.setAttribute('width', 50);
            imgL.setAttribute('height', 70);
            imgL.src = App.lLogoImg;
            imgL.alt = "The L of Laurent";

            for (let index = 0; index < title.length; index++) {
                const char = title.charAt(index);
                const span = document.createElement('span');
                span.style.opacity = 1;
                if (char !== ' ') {
                    if (char === 'J') {
                        elem.appendChild(imgJ);
                        continue;
                    } else if (char === 'L') {
                        elem.appendChild(imgL);
                        continue;
                    }
                    span.classList.add('blast');
                    span.classList.add('spin-me');
                    span.setAttribute('aria-hidden', true);
                    span.innerHTML = char;
                } else {
                    span.classList.add('space-right');
                }
                elem.appendChild(span);
                if (char === ',' || char === '&') {
                    elem.appendChild(document.createElement('br'));
                }
            }
        });

    },
    initPortfolioWall: function () {
        const portfolioWall = document.getElementById("portfolio-wall");
        if (Utils.Function.empty(portfolioWall)) {
            return;
        }

        Utils.Function.ajax('data/portfolio.json', function (response, httpCode) {
            if (httpCode == 200) {
                const jsonData = JSON.parse(response);
                const list = document.createElement('ul');
                // list.classList.add('magicwall-grid');
                jsonData.forEach(item => {
                    const bgDiv = document.createElement('div');
                    bgDiv.classList.add('magic-wall_item');
                    bgDiv.style = `background-image: url('${item.thumbnail}');`;

                    const hoverDiv = document.createElement('div');
                    hoverDiv.classList.add('hover-content');
                    bgDiv.appendChild(hoverDiv);

                    const itemLink = document.createElement('a');
                    itemLink.href = item.link;
                    itemLink.title = item.title;
                    itemLink.classList.add('colorbox');
                    itemLink.target = "_blank";
                    bgDiv.appendChild(itemLink);

                    const li = document.createElement('li');
                    li.appendChild(bgDiv);
                    list.appendChild(li);
                });
                portfolioWall.appendChild(list);
            }
        });
    },
    initWorkExperience: function () {
        const workWall = document.getElementById("work-wall");
        if (Utils.Function.empty(workWall)) {
            return;
        }
        workWall.classList.add('row');

        Utils.Function.ajax('data/work.json', function (data, httpCode) {
            if (httpCode == 200) {
                const jsonData = JSON.parse(data);
                jsonData.forEach(item => {
                    const box = document.createElement('div');
                    box.classList.add('work-box');

                    const header = document.createElement('header');
                    header.innerText = item.header;
                    box.appendChild(header);

                    const section = document.createElement('section');
                    section.innerText = item.section;
                    const date = document.createElement('time');
                    date.innerText = item.date;
                    section.appendChild(date);
                    box.appendChild(section);

                    const footer = document.createElement('footer');
                    footer.innerText = item.footer;
                    box.appendChild(footer);
                    workWall.appendChild(box);
                });
            }
        });
    },
    /**
     * @description The loader div/obj
     */
    loader: {
        isLoading: false,
        preloader: function() {
            const preloader = document.getElementById('preloader');
            if (Utils.Function.empty(preloader)) {
                const loaderDiv = document.createElement('div');
                loaderDiv.classList.add('preloader');
                document.body.appendChild(loaderDiv);
                return loaderDiv;
            }
            return preloader;
        },
        barValue: null,
        progressBar: null,
        progressBar_bg: null,
        /**
         * @description Init loading div. It will display
         */
        init: function() {
            const inner = document.createElement('div'),
            myThoughts = document.createElement('span'),
            logo = document.createElement('img');

            logo.setAttribute('width', 100);
            logo.src = App.jlLogoImg;
            const text = Utils.Function.choose(App.myThoughts),
            measureText = Utils.Function.measureText(text);
            myThoughts.style.margin = '20px auto';
            myThoughts.style.width = `${(measureText.width / 2)}px`;
            myThoughts.innerText = text;
            
            App.loader.barValue = document.createElement('span');
            App.loader.progressBar = document.createElement('div');
            App.loader.progressBar_bg = document.createElement('div');

            App.loader.preloader().classList.add('preloader');
            inner.classList.add('inner');
            App.loader.progressBar.classList.add('progressBar');
            App.loader.progressBar_bg.classList.add('progressBar-bg');
            
            App.loader.progressBar_bg.appendChild(App.loader.progressBar);
            App.loader.progressBar_bg.appendChild(App.loader.barValue);
            inner.appendChild(logo);
            inner.appendChild(myThoughts);
            inner.appendChild(App.loader.progressBar_bg);
            App.loader.preloader().appendChild(inner);
        },
        /**
         * @description Increasse the speed of proress bar
         * @param {Number}      SPEED       Higher the value the slower progess bar, Smaller the value the faster the progress bar finish. Default at 40
         * @param {Function}    callback    Call function when progress bar is at 100%
         */
        increase: function (SPEED = 40, callback) {
            const limit = 100;
            for(let i = 0; i <= limit; i++) {
                setTimeout(function () {
                    if (i == 100) {
                        callback();
                    } else if (i >= 94) {
                        App.loader.progressBar_bg.style = "position: absolute;flex-wrap: wrap;";
                        App.loader.barValue.style = "margin: auto;";
                    }
                    App.loader.barValue.innerHTML = `${i}%`;
                    App.loader.progressBar.style.width = `${i}%`;
                }, SPEED * i);
            }
        },
        /**
         * @description Show loading div before changing page
         * @param {String} url 
         * @param {Number} speed 
         * @returns 
         */
        loadPage: function (url, speed = 20) {
            if (!App.READY || this.isLoading || Utils.Function.empty(App.myContainer) || !Utils.Function.isString(url)) {return false;}

            this.isLoading = true;
            this.init();
            this.increase(speed, function () {
                
                Utils.Function.ajax(url, function (response, httpCode) {
                    console.log('Done');
                    console.log(response, httpCode);
    
                    if (Utils.Function.empty(response)) {
                        App.loader.loadPageError(httpCode);
                    } else {
                        document.textContent = response;
                        document.location = url;
                    }
                    App.loader.isLoading = false;
                });
            });
        },
        /**
         * @description Load error page based of Http code
         * @param {Number} code 
         */
        loadPageError: function (code) {
            switch (code) {
                case 404:
                    document.location = `${code}.html`;
                    break;
            
                default:
                    document.location = '404.html';
                    break;
            }
        }
    }
};

window.onload = () => {
    if (!App.READY) {
        App.init();

        if (Utils.Function.isScriptAdded('js/tagcanvas.js')) {
            if (!Utils.Function.empty(TagCanvas) && !Utils.Function.empty(App.myTechCanvas)) {
                TagCanvas.Start('myTechCanvas','tags', {
                    textColour: "#00AAFF",
                    outlineColour: "transparent",
                    reverse: true,
                    depth: 0.8,
                    maxSpeed: 0.05,
                    weight: true
                });
            } else {
                document.getElementById('myTechCanvasContainer').remove();
            }
        }
    }
}