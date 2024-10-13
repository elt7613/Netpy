document.addEventListener('DOMContentLoaded', () => {
    const cardData = [
        {
            title: "SERVICES",
            description: "Enterprise IT Solution Platform",
            backgroundImage: 'ASSETS/section_1/section_1_card_1_img.png',
            linkUrl: "https://example.com/card1",
            newContent: "We offer enterprise-level IT solutions and services, delivering high-quality technology solutions to meet the evolving needs of businesses across various industries."
        },
        {
            title: "SERVICES",
            description: "Robotics & Automation Learning",
            backgroundImage: 'ASSETS/section_1/section_1_card_2_img.png',
            linkUrl: "https://example.com/card2",
            newContent: "We provide comprehensive education in robotics and automation, empowering learners with hands-on skills to excel in the rapidly growing fields of advanced technology."
        },
        {
            title: "SERVICES",
            description: "Mentorship & Training Program",
            backgroundImage: 'ASSETS/section_1/section_1_card_3_img.png',
            linkUrl: "https://example.com/card3",
            newContent: "We offer IT-based internships that provide real-world experience, helping students and professionals develop practical skills and industry knowledge for their career growth."
        }
    ];

    const cardSection = document.querySelector('.section-1 .cards-section');
    cardSection.innerHTML = ''; // Clear any existing cards

    cardData.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.style.backgroundImage = `url(${card.backgroundImage})`;

        const cardTitle = document.createElement('h3');
        cardTitle.textContent = card.title;

        const cardDescription = document.createElement('p');
        cardDescription.classList.add('card-description');
        cardDescription.textContent = card.description;

        const newContentDiv = document.createElement('div');
        newContentDiv.classList.add('new-content');
        newContentDiv.textContent = card.newContent;

        const cardLink = document.createElement('a');
        cardLink.href = card.linkUrl;
        cardLink.classList.add('see-more-link');
        cardLink.innerHTML = 'See More <img src="ASSETS/arrow.png"/>';

        cardElement.appendChild(cardTitle);        // Heading (SERVICES)
        cardElement.appendChild(cardDescription);  // Description
        cardElement.appendChild(newContentDiv);    // New content (slides in)
        cardElement.appendChild(cardLink);         // See More link

        cardSection.appendChild(cardElement);
    });
});
