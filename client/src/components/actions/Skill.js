import React, { Component } from '../../../../node_modules/@types/react'

export class Skill extends Component {
           
            render() {
              console.log(this.props.skill)
            return (
              <div style={{ background: "white" }}>
                <p>{this.props.skill.name}
                
                </p>
               
              </div>
            )
          }
        }
        


export default Skill