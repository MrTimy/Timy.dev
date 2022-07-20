import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {
    const options = useMemo(() => {
        
        return {
            backgrounf:{
                color:"#000",
            },
            fullScreen:{
                enable:true,
                zIndex: 0,
            },
            interactivity:{
                events:{
                    onClick:{
                        enable:true,
                        mode: "push",
                    },
                    onhover:{
                        enable:true,
                        mode: "repulse",
                    },
                },
            },
            modes:{
                push:{
                    quantity:10,
                },
                repulse:{
                    distance:100,
                
                },
            },
            particles:{
                links:{
                    enable:true,
                    distance:100,
                    
                },
                move:{
                    enable:true,
                    speed: {min: 1, max:2},
                },
                opacity:{
                    value:{min: 0.3, max:0.7},
                },
                size:{
                    value: {min: 1, max:3},
                },
            }
        };
    }, [])

const particlesInit  = useCallback((engine) => {
  loadFull(engine);
}, []);

return <Particles  id={props.id} init={particlesInit} options={options} />

};
export default ParticlesComponent;