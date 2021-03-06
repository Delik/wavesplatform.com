import { Component, Children } from 'react';


import { smoothScrollTo } from '../../utils/smoothScroll';


class Provider extends Component {
    static defaultProps = {
        duration: 1500
    }

    componentDidMount() {
        setTimeout(this.scrollToAnchor, 0);
        window.addEventListener("hashchange", this.scrollToAnchor, false);
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", this.scrollToAnchor, false);
    }

    scrollToAnchor = () => {
        const hash = window.location.hash.substring(1);
        const element = document.querySelector(`[data-anchor='${hash}']`);
        if (element) {
            smoothScrollTo(element, { duration: this.props.duration, viewportOffsetTop: 50 });
        }
    }

    render() {
        return Children.only(this.props.children)
    }

}


export default Provider;
