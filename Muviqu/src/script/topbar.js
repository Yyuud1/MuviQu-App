class TopBar extends HTMLElement {
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
        <style>
            @media only screen and (max-width: 450px){
                .navbar {
                    width: 100%;
                }
            
                .navbar .navbar-content{
                    display: flex;
                    flex-direction: column;
                }
            
                .navbar .navbar-content a{
                    border-bottom: none;    
                }
                
                .navbar .navbar-content form {
                    width: 100%;
                }
                
            }
        </style>

        <div class="navbar p-2 fixed-top">
            <div class="navbar-content container">
                <a class="btn navbar-brand text-white logo" onClick="document.location.reload(true)">MuviQu<span>.</span></a>
                <form class="d-flex" id="form-search">
                    <input id="input-search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-search" type="submit"><i class="fas fa-search"></i></button>
                </form>
            </div>
        </div>
        `
    }
}

customElements.define('top-bar', TopBar);