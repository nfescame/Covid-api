import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { AuthContext } from "../../providers/index";

export default function CardComponet() {
  const dataProvider = useContext(AuthContext);
  const { countrySelect } = dataProvider;

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Population {countrySelect.Population}
            </Typography>
            <Typography variant='h5' component='div'>
              {countrySelect.Country} / Day:{countrySelect.lastUpdate}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Cases: {countrySelect.Cases}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Cases Per Million: {countrySelect.CasesPerMillion}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Deaths: {countrySelect.TotalDeaths}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Deaths Per Million: {countrySelect.TotalDeathsPerMillion}
            </Typography>
            <Typography variant='h5' component='div'>
              Wear mask.Save lives.
            </Typography>
            <Typography variant='body2'>
              {'"wear mask"'}
              <br />
              {'"Wash your hands"'}
              <br />
              {'"keep a safe distance"'}
            </Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
