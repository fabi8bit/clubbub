# Club Bub

The Boarding School (TBS skateboarding) is the website of a skateboard school specializing in longboarding. The school offers lessons and education on how to ride a longboard, which is a type of skateboard that is generally longer and wider than a traditional skateboard. It offers classes for beginners as well as more advanced riders, and covers topics such as balance, carving, turning, braking, and tricks. TBS aims to gather people ranging from 18 years old and older, around longboarding. It offers not only programs specialized in various disciplines of longboarding, but also opportunities for people with an interest for the skateboard culture to chat together.

![Responsive Mockup](readme_images/responsive_mock_up.png)




## Development of the idea

### Where the idea comes from

I'm almost 50 years old, and I have been passionate about skateboarding since age 11. At my age it is basically impossible to skate as you wish, unless you are Tony Hawk. And because once you are a skater, you are a skater for the rest of your life, (but your body will not keep up) I thought it would be a good idea to invent a skateboard school to keep this dream alive: TBS Skateboarding.

- Sketches on paper

![sketches](readme_images/sketches.png)

- Logo created in Adobe Illustrator starting from the free icon I found at this link: https://www.freepik.com/free-vector/people-enjoying-their-free-time_4914715.htm#query=skateboard&position=14&from_view=search&track=sph

![tbs logo](readme_images/tbs-logo_small_readme.png)

- Color branding research. Inspiration Screenshot and logo with color branding

![color inspiration](readme_images/color-inspiration-straction.png)
![Logo with color branding](readme_images/tbs-color-branding-01.png)



- Wire framing of the website created in Adobe XD

![wireframe01](readme_images/01-wireframe-Index.png)
![wireframe02](readme_images/02-wireframe-gallery.png)
![wireframe03](readme_images/03-wireframe-About.png)
![wireframe04](readme_images/04-wireframe-SignUp.png)




### Features

  - __Header__

  - The header is divided into two parts: the logo and the navigation bar. This structure is replicated in all pages of the site for optimal user experience. The logo has a spin animation on load, in order to give the impression that it is rolling like a skateboard wheel. The navigation bar allows users to navigate the site back and forth without the use of the back button of the browser.
  - This section is fully responsive and adapts to different screen sizes, changing the position of the elements according to the screen aspect ratios.

![Header](readme_images/header-scrshot.webp)

- __Homepage image__

  - The image hopes to transmit the right vibe to the user and includes an eye-catching overlay claim.

![Homepage image](readme_images/homepage-scrshot.webp)


- __School Offer__
  
  - In this section, the offer of the school is presented through images with a brief description. In the future, every section will be clickable, and will bring the user to the page where every discipline will be described more in depth, with a brief tutorial video on how to take basic first steps into longboarding.

![School Offer section](readme_images/offer-scrshot.webp)


- __Footer__

  - The footer is divided between the top part and the bottom part. The first one contains the links to the most relevant social media networks of the school. Each link will open in a new tab to facilitate the user's navigation, while the address and contacts of TBS are included in the bottom part.

![Footer](readme_images/footer-scrsot.webp)


- __Gallery page__

  - The gallery shows some picture of a longboarding competition

![Gallery](readme_images/gallery-scrshot.webp)


- __About page__

  - This section tells the story of TBS and how the members fell in love with skateboarding. It features an original slide from 1992 picturing the founders at a very young age.

![About](readme_images/about-scrshot.webp)


- __SignUp page__

  - Through the form the user can subscribe to the TBS community in order to get information and news. This section is only for demostration and the backend is not implemented.

![SignUp](readme_images/signup-scrshot.webp)



## Testing 

The website has been tested in all its parts and works as intended. It is fully responsive and supports all screen sizes down to 350px. The tests were conducted using the inspector of Google Chrome. It scored high results with Lighthouse both on [Desktop](readme_images/lighthouse_desktop_results.png) and [Mobile](readme_images/lighthouse_mobile_results.png) ([Screenshot_Mobile](readme_images/lighthouse_mobile_test_scrshot.png)).
The elements adapt and change their appearence according to the aspect ratio of the screen without breaking the design.





### Validator Testing 

- JS
  - 25 warning were returned when passing through [JSHint](readme_assets/JSHint_warnings.md)
- CSS
  - 
- HTML
  -

### Unfixed

- Lighthouse spots undeclared width and hight for some images. Putting the right aspect-ratio (checked on Photoshop) it says that the image is distort (but infact was not) so I decided to left them undeclared because it scores higher results.
In future the images will be converted to WebP. The jpg were also tinyfied using [tinyPNG](https://tinypng.com/)

## Deployment



- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - On the left menu click on pages
  - On Build and Deployment section select the main branch and click on save.
  - Once saved the url of the page will appear on top of the page. 

The live link can be found here - https://fabi8bit.github.io/theboardingschool/


## Credits 

The photos on this website are extracted from my private photo collection except for the [freestyle](assets/images/freestyle-thumb-small.jpg) and [move_around](assets/images/move-thumb-small.jpg) photos, which are available for free download from [pexels](https://www.pexels.com/search/longboard/).

### Content and technique

- All the text are invented and created from scratch
- Advice on how to use flex-box where taken from this [tutorial](https://www.youtube.com/watch?v=fYq5PXgSsbE&t=17s)
- The technique for reordering nav menu was taken from stackoverflow [here](https://stackoverflow.com/questions/11243002/css-float-right-without-changing-order)
- The technique for the spinning logo was taken from [here](https://codepen.io/teerapuch/pen/vLJXeR)
- Advice to create the photo gallery was taken from [here](https://blog.logrocket.com/responsive-image-gallery-css-flexbox/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)
