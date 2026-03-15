async function loadSections(id, file) {
    try {
        const response = await fetch(`sections/${file}`);

        if (!response.ok) {
            throw new Error(`Failed to lead ${file}`);
        }

        const data = await response.text();
        document.getElementById(id).innerHTML = data;

    } catch (error) {
        console.error(error);
    }
}
Promise.all([
    loadSections('navbar', 'navbar.html'),
    loadSections('hero', 'hero.html'),
    loadSections('treatment', 'treatment.html'),
    loadSections('transformation', 'transformation.html'),
    loadSections('feature', 'feature.html'),
    loadSections('testimonials', 'testimonials.html'),
    loadSections('locations', 'locations.html'),
    loadSections('footer', 'footer.html'),
])


window.addEventListener("click", (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.preventDefault();
    }
})

