import axios from 'axios'

export default function attachClick(items = [], route = '/api/click', headers = {}) {
    if(items.length > 0) {
        try {
            const validItems = items.filter((item) => {
                try {
                    return item
                } catch (error) {
                    return false
                }
            })
            const nodeLists = validItems.map((item) => {
                return document.querySelectorAll(item)
            })
            nodeLists.map((list) => {
                list.forEach((node) => {
                    node.addEventListener('click', function () {
                        const clickData = {
                            type: 'button',
                            label: node.getAttribute('aria-label'),
                            url: window.location.href,
                            datetime: new Date().toISOString().slice(0, 19).replace('T', ' '),
                        }
                        axios
                            .post(route, clickData, headers)
                            .then((response) => {
                                console.log(response.data)
                            }
                            ).catch((error) => {
                                console.log(error)
                            }
                            )
                    })
                })
            })
        } catch (error) {
            console.log(error)
        }
    }
}