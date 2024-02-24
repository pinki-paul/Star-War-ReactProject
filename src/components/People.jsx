import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const People = ({ data }) => {
  return (
    <>
      <h1 className='main-heading'>People</h1>
      <Grid columns={3} className='main-container'>
        {
          data.map((people, i) => {
            return (
              <Grid.Column key={i} computer={5} tablet={8} mobile={16} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }} >
                <Card className='card-container'>
                  <Card.Content>

                    <Card.Header className='header'>
                      <h3>{people.name}</h3>
                    </Card.Header>

                    <Card.Description>
                      <div className="description">
                        <h3 className='height'>Height: <span>{people.height}</span></h3>
                      </div>

                      <div className="description">
                        <h3 className='mass'>Mass: <span>{people.mass}</span></h3>
                      </div>

                      <div className="description">
                        <h3 className='hair-color'>Hair Color: <span>{people.hair_color}</span></h3>
                      </div>


                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            )
          })
        }
      </Grid>
    </>
  )
}

export default People