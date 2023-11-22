import { Typography, Stack, Button } from "@mui/material"

import BodyPartImage from '../assets/body-part.svg'
import TargetImage from '../assets/target.svg'
import EquipmentImage from '../assets/equipment.svg'

export default function Detail ({ exerciseDetail }) {

    // Destructuring para poder utilizar las propiedades con su nombre
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        }
    ]

    return (
        <Stack gap="60px" sx={{flexDirection: { lg:'row'}, p: '20px', alignItems:'center'}}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-imange" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px'}}}>
                <Typography variant="h3">
                    {name}
                </Typography>
                <Typography variant="h6">
                    Los ejercicios te mantienen fuerte. {name} es uno de los mejores ejercicios para trabajar tus {target}
                </Typography>
                {extraDetail.map((item) => (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button sx={{background: '#fff2db', borderRadius: '50%', width:'100px', height: '100px'}}>
                            <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px'}}/>
                        </Button>
                        <Typography textTransform="capitalize" variant="h5">
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}