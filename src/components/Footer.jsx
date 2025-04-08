const curDate = new Date()
const curYear = curDate.getFullYear()
function Footer() {
    return (
        <footer>
            <span><a href="https://www.linkedin.com/in/mohamedj0910/" target="_blank">Mohamed J</a> | {curYear}</span>
        </footer>
    )
}

export default Footer