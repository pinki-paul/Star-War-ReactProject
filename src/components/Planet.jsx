import React from 'react'
import { Card, Grid } from 'semantic-ui-react'


const Planet = ({ data }) => {

  return (
    <>
      <h1 className='main-heading'>Planets</h1>
      <Grid columns={3} className='main-container'>
        {
          data.map((planets, i) => {
            return (

              <Grid.Column key={i} computer={5} tablet={8} mobile={16} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

              }} >
                <Card className='card-container'>
                  <Card.Content >

                    <Card.Header className='header'>
                      <h3> Name: {planets.name}</h3>
                    </Card.Header>

                    <Card.Description>
                      <div className='description'>
                        <h3 className='climate'>Climate: <span>{planets.climate}</span></h3>

                      </div>

                      <div className="description">
                        <h3 className='terrain'>Terrain: <span>{planets.terrain}</span></h3>

                      </div>

                      <div className="description">
                        <h3 className='population'>Population: <span>{planets.population}</span></h3>

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

export default Planet