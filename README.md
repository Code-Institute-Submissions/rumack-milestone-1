# Bettina Marten, Landscape Gardener – professional web page

## Stream one milestone project
## User-Centric Frontend Development – Code Institute

This is for a client, a landscape gardener, who needed a page to present some basic information about herself, her design philosophy, the services her company provides, her portfolio of gardens, and, of course, contact information should a prospective client wish to engage her services.

### Run project locally

Clone the repository by entering `git clone https://github.com/rumack/milestone-1` in your terminal, then go to the directory and enter the following commands:

`npm install`

`npm run build:css`

Then open the index.html file in your browser of choice.

### Deployment

With Github pages, deployment is a breeze. Basically, the master branch of your chosen repository can be hosted on the GitHub Pages platform with a few clicks. A live demonstration of the site can be accessed [here](https://rumack.github.io/milestone-1). 

### Project raison d’être

The client wanted to showcase her talents and achievements as well as to provide some information about herself, her design manifesto, the services she provides and a means to easily contact her.

She didn’t provide too much in the way of content, but asked for the page to be on the one hand as minimalistic as possible, but on the other classy and design-oriented.

### UX

I felt that for the client’s needs to be satisfied, the user’s first sight of the page needed to be as impactful as possible. The animated SVG logo provides not just some eye-candy, but a coherent message about the design process. The logo outline is drawn, then slowly filled in with colour and substance in a way that is supposed to remind the user of the process of transforming one’s garden - that process also begins with an outline design, then slowly materialises into something substantial and tangible. After the animation runs its course, the background image fades in as if to confirm the message – and the user sees an example of the client’s work.

I chose a one-page design in consultation with the client. She wanted it to be as mobile-friendly as possible where the scrolling habits of the smartphone user were indulged. The page is perfectly responsive, although there remain some problems with the image gallery on tablets. However, this is more to do with the limitations of the pure HTML/CSS solution used here. The image gallery code will later be refactored for the client using technologies beyond the remit of this project.

### Technologies

HTML
CSS
Sass

I chose to use Sass because of the way it allows me to organise my code in a neat and accessible way. It made development and experimentation much easier.

For layout, I made heavy use of CSS Grid and Flexbox. These are extraordinarily useful technologies, especially when thinking about responsive design. Large parts of the site are perfectly responsive without the use of any media queries. Media queries were used for fine-tuning the response to screen size changes.

In general, Grid is preferred for two dimensional layout (columns and rows), while Flexbox was chosen for one-dimensional layout (columns or rows). However, the row/column gap feature of Grid makes it preferable sometimes even in one-dimensional situations. The same 'gap' feature for Flexbox is not yet widely supported by the main browsers.

The site was developed on Firefox because of its excellent Grid and Flexbox tools.

The image gallery was an ambitious feature, especially since we are limited to HTML and CSS in the project. It’s really a hack more than a maintainable solution. This project will remain here but I will be cloning it in order to rewrite the portfolio section using JavaScript to facilitate the interactivity and Grid/Flexbox for layout before submitting to the client.

### Future refactoring

I would like to refactor the entirety of the code at some stage to render more elements as components that can be reused in the event that the site will need an expansion at some stage in the future. This will make the code more maintainable and adaptable, and easier for me to reuse in other projects.

Also, once the client has settled on the final images to be included on the site, I would like to render them as responsive as possible, using the full range of techniques depending on the specific image: art direction, resolution switching and the HTML attribute 'srcset'. This should make the site as lightweight and fast as possible on small screen devices.

Finally, for a site of this kind, I'd like to learn more about search-engine optimisation techniques in order to improve the ranking of the client's page in search results.

### Version control

I was quite a way into development of the site before figuring out the usefulness of tracing changes in my project with Git. After adopting the git method, suddenly experimentation became much easier, never having to worry about getting back to a previous working version. Generally, I adopted a process whereby all changes would be committed at the end of the working day, and whenever I felt a milestone of some kind had been passed (for example, a new section or functionality) I would push to the repository in GitHub. Commit messages were used to indicate the major changes in each version.

### Testing

The page has been tested on all major browsers: Firefox, Chrome, Safari and Edge, and as many devices as possible. Not having much in the way of tablet access, that device remains the most problematic - particularly for the gallery section. As explained above, this will be simple to fix using JavaScript. 

All features and the site's responsiveness has been tested. Some features proved to be somewhat inconsistent, depending on browser or versions of a browser, so I added a '@supports' query to deal with the inconsistency. The contact form is complete, but not yet connected. I've been looking at both PHP and JS methods for dealing with that (it seems very simple) but both are beyond the scope of this project so will be developed seperately for the client.

### Content

Some content has been provided by the client, but I’m still waiting for most of the elements from her. One or two stock images from unsplash.com were used. For the moment, the social media links open to Facebook, Instagram home pages - I'm waiting for the client to set up her accounts. All text is placeholder text until the client provides me with definitive content.

### Acknowledgements

All code is my own, although I’d like to acknowledge the CI instructors for some of my coding ideas here. I’d also like to acknowledge [Jonas Schmedtmann](http://codingheroes.io/) – I learned a huge amount from his Advanced CSS and SASS course, and the various tips and tricks and I gleaned from his excellent course are put into practice in a range of different ways here. I learned the SVG animation techniques from an [article](https://jakearchibald.com/2013/animated-line-drawing-svg/) by Jake Archibald. 

### Licence

All code and content remains the property of the client, Bettina Marten.

