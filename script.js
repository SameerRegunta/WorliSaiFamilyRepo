const allEvents = [
    { name: "Dum Dum Dum Dum Damaru", date: "1 Jan 2023", year: "2023", month: "January", link: "https://sairhythms.sathyasai.org/song/dum-dum-dum-dum-damaru" },
    { name: "Jai Durga Lakshmi Saraswathi Sai Jaganmata", date: "5 Jan 2023", year: "2023", month: "January", link: "https://sairhythms.sathyasai.org/song/jai-durga-lakshmi-saraswathi-sai-jaganmata" },
    { name: "Lambodhara Hey Vinayaka", date: "10 Feb 2024", year: "2024", month: "February", link: "https://sairhythms.sathyasai.org/song/lambodhara-hey-vinayaka" },
    { name: "Shiva Shankara Parvathi Ramana", date: "20 Mar 2024", year: "2024", month: "March", link: "https://sairhythms.sathyasai.org/song/shiva-shankara-parvathi-ramana" },
    { name: "Gayatri Havan of Bhagwan’s Centenary Year Celebrations held at the residence of Shri Pothu Sudarshan Garu", date: "13 Jan 2025", year: "2025", month: "January", link: "https://photos.app.goo.gl/AHZgPBvEhop9j79n7"},
    { name: "Narayan Seva", date: "18 Jan 2025", year: "2025", month: "January", link: "https://photos.app.goo.gl/1MbPTnCDHJCtcAGh6"},
    { name: "Narayan Seva", date: "15 Feb 2025", year: "2025", month: "February", link: "https://photos.app.goo.gl/gUPGrDNuoavw4nod9"},
    { name: "Ekadasha Rudrabhishekam", date: "23 Feb 2025", year: "2025", month: "February", link: "https://photos.app.goo.gl/5JqQ6PhmQ9jco3qu9"},
    { name: "Gayatri Havan of Bhagwan’s Centenary Year Celebrations held at the residence of Smt Indira Gone Garu", date: "22 Feb 2025", year: "2025", month: "February", link: "https://photos.app.goo.gl/jtH9Ng4vtfBimXEeA"},
    { name: "Residential Bhajans of Bhagwan’s Centenary Year Celebrations held at Balvikas child – Sriyan Siripuram", date: "16 Feb 2025", year: "2025", month: "February", link: "https://photos.app.goo.gl/4vF6YofH6ZTvhFH78"},
];

function showEvents(year) {
    let eventsContainer = document.getElementById("eventsContainer");
    
    if (year === "home") {
        eventsContainer.innerHTML = `
            <h2>Welcome!</h2>
            <p>We are delighted to present this collection of devotional events. Our team is dedicated to organizing and sharing these inspiring moments with you.</p>
        `;
        return;
    }
    
    document.getElementById("filterYear").value = year;
    filterEvents();
}

function filterEvents() {
    let searchInput = document.getElementById("searchEvent").value.toLowerCase();
    let selectedYear = document.getElementById("filterYear").value;
    let selectedMonth = document.getElementById("filterMonth").value;
    let eventsContainer = document.getElementById("eventsContainer");
    
    let filteredEvents = allEvents.filter(event => {
        let matchesSearch = event.name.toLowerCase().includes(searchInput);
        let matchesYear = selectedYear === "" || event.year === selectedYear;
        let matchesMonth = selectedMonth === "" || event.month === selectedMonth;
        return matchesSearch && matchesYear && matchesMonth;
    });
    
    if (filteredEvents.length === 0) {
        eventsContainer.innerHTML = "<h2>No events found</h2>";
    } else {
        eventsContainer.innerHTML = filteredEvents.map(event => `
            <div class="event">
                <div><h4><span>${event.name}</span>  | <a href="${event.link}" target="_blank">Photos Link</a></h4></div>
                <div class="event-date"><h5><span>${event.date}</span></h5></div>
            </div>
        `).join("");
    }
}

function clearFilters() {
    document.getElementById("searchEvent").value = "";
    document.getElementById("filterYear").value = "";
    document.getElementById("filterMonth").value = "";
    filterEvents();
}
