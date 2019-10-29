# Bettina Marten, Landscape Gardener – professional web page

## Stream one milestone project
## User-Centric Frontend Development – Code Institute

This is for a client, a landscape gardener, who needed a page to present some basic information about herself, her design philosophy, the services her company provides, her portfolio of gardens, and, of course, contact information should a prospective client wish to engage her services.

### Run project locally

Clone the repository by entering `git clone https://github.com/rumack/milestone-1` in your terminal, then go to the directory and enter the following commands:

`npm install`
`npm run build:css`

Then open the index.html file in your browser of choice.

### Demo

A live deployed version of the site can be accessed [here](https://rumack.github.io/milestone-1). 

### Project raison d’être

The client wanted to showcase her talents and achievements as well as to provide some information about herself, her design manifesto, the services she provides and a means to easily contact her.

She didn’t provide too much in the way of content, but asked for the page to be on the one hand as minimalistic as possible, but on the other classy and design-oriented.

### UX

I felt that for the client’s needs to be satisfied, the user’s first sight of the page needed to be as impactful as possible. The animated SVG logo provides not just some eye-candy, but a coherent message about the design process. The logo outline is drawn, then slowly filled in with colour and substance in a way that is supposed to remind the user of the process of transforming one’s green space. That process also begins with an outline design, then slowly materialises into something substantial and tangible. After the animation runs its course, the background image fades in as if to confirm the message – and the user sees an example of the client’s work.

I chose a one-page design in consultation with the client. She wanted it to be as mobile-friendly as possible where the scrolling habits of the smartphone user were indulged. The page is perfectly responsive, although there remain some problems with the image gallery on tablets. However, this is more to do with the limitations of the pure HTML/CSS solution used here. The image gallery will be refactored for the client using technologies beyond the remit of this project.

### Technologies

HTML
CSS
SASS

I chose to use SASS because of the way it allows me to organise my code in a neat and accessible way. It made development and experimentation much easier.

For layout, I made heavy use of CSS Grid and Flexbox. These are extraordinarily useful technologies, especially when thinking about responsive design. Large parts of the site are perfectly responsive without the use of any media queries. Media queries were used for fine-tuning the response to screen size changes.

In general, Grid is preferred for two dimensional layout (columns and rows), while Flexbox was chosen for one-dimensional layout (columns or rows). However, the row/column gap feature of Grid makes it preferable sometimes even in one-dimensional situations. The same 'gap' feature for Flexbox is not yet widely supported by the main browsers.

The site was developed on Firefox because of its excellent Grid and Flexbox tools.

The image gallery was an ambitious feature, especially since we are limited to HTML and CSS in the project. It’s really a hack more than a maintainable solution. This project will remain here but I will be cloning it in order to rewrite the portfolio section using JavaScript to facilitate the interactivity and Grid/Flexbox for layout before submitting to the client.

### Future refactoring

I would like to refactor the entirety of code at some stage to render more elements as components that can be reused in the event that the site will need an expansion at some stage in the future. This will make the code more maintainable and adaptable, and easier for me to reuse in other projects.

### Testing

The page has been tested on all major browsers: Firefox, Chrome, Safari and Edge, and as many devices as possible. Not having much in the way of tablet access, that device remains the most problematic - particularly for the gallery section. As explained above, this will be simple to fix using JavaScript.

### Content

Some content has been provided by the client – I’m still waiting for the final elements from her. One or two stock images from unsplash.com were used.

### Acknowledgements

All code is my own, although I’d like to acknowledge the CI instructors for some of my coding ideas here. I’d also like to acknowledge [Jonas Schmedtmann](http://codingheroes.io/) – I learned a huge amount from his Advanced CSS and SASS course, and the various tips and tricks and I gleaned from his excellent course are put into practice in a range of different ways here.

### Licence

All code and content remains the property of the client, Bettina Marten.

