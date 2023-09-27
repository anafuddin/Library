const myLibrary = [];
        let libraryDiv = document.querySelector('.library')
        const newBookButton = document.querySelector('.newBookButton')
        const submit = document.querySelector('.submit')
        const bookModal = document.querySelector('.book-modal')
        const bookForm = document.querySelector('form');

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
            showBookOnPage(myLibrary[myLibrary.length - 1]);
        }


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

        function addReadButton(pages) {
            let readButton = document.createElement('button');
            if(pages) {
             readButton.textContent = 'Have Read';
             readButton.classList.add('read-button-yes');
             readButton.setAttribute('id', 'read-button');
             let pageDiv = libraryDiv.lastChild;
             pageDiv.appendChild(readButton);
            } else {
             readButton.textContent = 'Have Not Read';
             readButton.classList.add('read-button-no')
             readButton.setAttribute('id', 'read-button');
             let pageDiv = libraryDiv.lastChild;
             pageDiv.appendChild(readButton);
            }
            readButton.addEventListener('click', (e) => {
                e.target.classList.toggle('read-button-yes');
                e.target.classList.toggle('read-button-no');
                if(e.target.textContent == 'Have Read') {
                    e.target.textContent = 'Have Not Read';
                } else {
                    e.target.textContent = 'Have Read';
                }
            })
         }

        function showBookOnPage(book) {
                createPage();
                createHeader(book.title);
                createInfo(book.author);
                createInfo(book.pages);
                addReadButton(book.read);
            }

        newBookButton.addEventListener('click', () => {
            bookModal.showModal();
        })

        submit.addEventListener('click', () => {
            bookModal.close();
        })
        
            submit.addEventListener('click', () => {
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const pages = document.getElementById('pageCount').value;
            const read = document.getElementById('read').checked;
            let newBook = new Book(title, author, pages, read);
            addBookToLibrary(newBook);
            bookForm.reset();
          })
        
        