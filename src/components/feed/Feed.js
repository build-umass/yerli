import React from 'react';
import Slider from './Slider'
import { API, graphqlOperation } from 'aws-amplify';

export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        const ListItems = `
        query {
            listLocalBetaVersions {
            items {
                id
                name
                flags
                business_bio
                owner_bio
                hours_of_oper
                phone_num
                website
                photo
                photos
                email
                streetAddress
                topProducts
            }
            }
        }
        `;

        API.graphql(graphqlOperation(ListItems))
            .then(res => {
                const items = (res.data.listLocalBetaVersions.items);
                this.setState({ isLoaded: true, items })
            },
                error => {
                    this.setState({ isLoaded: true, error })
                })
    }

    render() {
        let sliders = [
            {
                title: "Nearby",
                subtitle: "Businesses near you",
                places: this.state.items.slice(0, this.state.items.length / 2)
            },
            {
                title: "Female + Veteran",
                subtitle: "Businesses owned by females, veterans, and racial minorities",
                places: this.state.items.slice(this.state.items.length / 2, this.state.items.length)
            }
        ];
        const { error, isLoaded, items } = this.state;
        let key = 0;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <>
                    {
                    sliders.map(curr => (
                        <Slider
                            businessArr={curr.places}
                            businessCategory={curr.title}
                            businessDescrip={curr.subtitle}
                            key={key++}
                        />
                    ))
                }
                </>
            )
        }
    }
}