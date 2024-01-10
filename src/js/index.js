const onDOMContentLoaded = (event) => {
    event.preventDefault();
    const APIKEY = 'WpAJhQLU8yb3c9Cwar7KOkILfLR3zTf5';

    const form = document.querySelector('.header__search-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=50&q=`;

        const user_input = document.querySelector('.header__search-input').value.trim();
        url = url.concat(user_input);
        // console.log(url);

        // fetch(url)
        //     .then(response => response.json())
        //     .then(content => {
        //         // console.log(content.data)
        //         // console.log("META", content.meta)
        //         try {
        //             const main = document.querySelector('.main');

        //             main.innerHTML = '';

        //             content.data.forEach(gif => {

        //                 const img = document.createElement('img');
        //                 img.src = gif.images.downsized.url;
        //                 img.alt = gif.title
        //                 // main.insertAdjacentElement('beforeend', img)
        //                 main.appendChild(img)

        //             })

        //         } catch (err) {
        //             console.log(err)
        //         }
        //     })

        async function fetchGifs() {
            try{
                const response = await fetch(url);
                const content = await response.json();
                // console.log(content.data)
                // console.log("META", content.meta)
                const main = document.querySelector('.main');

                main.innerHTML = '';

                
                content.data.forEach(gif => {
                    const img_container = document.createElement('div');
                    const img = document.createElement('img');
                    const img_btn = document.createElement('button');
                    img_container.classList.add('main__img_container');
                    img_btn.classList.add('main__img_btn');
                    img.classList.add('main__img')
                    img_btn.textContent = 'Get URL';


                    img.src = gif.images.downsized.url;
                    img.alt = gif.title;

                    img_container.appendChild(img);
                    img_container.appendChild(img_btn);
                    main.appendChild(img_container);
                    
                    img_btn.addEventListener('click', (event) => {
                        event.preventDefault();
                        const fetched_url = document.createElement('a');
                        fetched_url.textContent = gif.url;
                        img_container.replaceChild(fetched_url, img_btn);

                        
                    })
                })




            } catch(err){
                console.log(err)
            }
        }

        fetchGifs();
    })


}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded)


