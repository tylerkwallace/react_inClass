import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

export default class MyCarousel extends Component {
    render() {
        return (
            <div>
                <UncontrolledCarousel
                    items={[
                        {
                            altText: 'Slide 1',
                            header: 'Slide 1',
                            caption: 'Text about the first slide',
                            key: 1,
                            src: 'https://picsum.photos/id/123/1200/600'
                        },
                        {
                            altText: 'Slide 2',
                            header: 'Slide 2',
                            caption: 'Text about the second slide',
                            key: 2,
                            src: 'https://picsum.photos/id/456/1200/600'
                        },
                        {
                            altText: 'Slide 3',
                            header: 'Slide 3',
                            caption: 'Text about the third slide',
                            key: 3,
                            src: 'https://picsum.photos/id/678/1200/600'
                        }
                    ]}
                />
            </div>
        );
    }
}