function lockedProfile() {
    const userProfileElements = document.querySelectorAll('#main .profile');
    for(let profile of userProfileElements){
        const showMoreButton = profile.querySelector('button');
        showMoreButton.addEventListener('click', (event) =>
        {
            const radioButtonLocked = profile.querySelector('input[value=lock]');
            const radioButtonUnlocked = profile.querySelector('input[value=unlock]');
            const hiddenFields = profile.querySelector('.profile div');

            if(radioButtonUnlocked.checked){
                if(showMoreButton.textContent === 'Show more') {
                    hiddenFields.style.display = 'inline';
                    showMoreButton.textContent = 'Hide it';
                }else if(showMoreButton.textContent === 'Hide it'){
                    hiddenFields.style.display = 'none';
                    showMoreButton.textContent = 'Show more';
                }
            }
        });
    }
}