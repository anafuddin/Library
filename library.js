const myLibrary = [];
        let libraryDiv = document.querySelector('.library')
        const newBookButton = document.querySelector('.newBookButton')
        const submit = document.querySelector('.submit')
        const bookModal = document.querySelector('.book-modal')

        function Book(title, author, pages, read) {
            this.title = title
            this.author = author
            this.pages = pages
            this.read = read
            this.info = () => {
                return `${title} by ${author}, ${pages} pages, ${read}`
            }
        }

        function addBookToLibrary(book) {
            myLibrary.push(book);
        }

        let theTrial = new Book('the trial', 'kafka', 600, 'has been read');
        let grapesOfWrath = new Book('Grapes of Wrath', 'Steinbeck', 600, 'has been read');

        addBookToLibrary(theTrial);
        addBookToLibrary(grapesOfWrath)


        function createPage() {
            let bookPage = document.createElement('div');
            bookPage.classList.toggle('page')
            libraryDiv.appendChild(bookPage);
        }
        

        function createHeader(title) {
            let header = document.createElement('h1');
            header.classList.toggle('book-title')
            header.textContent = title;
            let pageDiv = libraryDiv.lastChild
            pageDiv.appendChild(header);
        }

        function createInfo(bookInfo) {
            let info = document.createElement('p');
            info.textContent = bookInfo;
            let pageDiv = libraryDiv.lastChild
            pageDiv.appendChild(info);
        }

 /*       function newBook() {
            newBookButton.addEventListener('click', () => {
                addBookToLibrary(new Book(window.prompt(), window.prompt(), window.prompt(), window.prompt()));
                showBookOnPage(myLibrary);
            })};

        newBook();
*/
        function showBookOnPage(library) {
            library.forEach(book => {
                createPage();
                createHeader(book.title);
                createInfo(book.author);
                createInfo(book.pages);
                createInfo(book.read);})
            }

        newBookButton.addEventListener('click', () => {
            bookModal.showModal();
        })

        submit.addEventListener('click', () => {
            bookModal.close();
        })
        
        showBookOnPage(myLibrary);
        console.log(myLibrary);