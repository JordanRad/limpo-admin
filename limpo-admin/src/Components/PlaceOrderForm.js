import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const PlaceOrderForm = () => {
    const [selectedDate, setSelectedDate] = useState(new Date('2020-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (

        <Container align="center" p={2} m={3}>
            <Box width="55%" border={1} p={3} m={3}>
                <FormControl >
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <TextField id="outlined-basic" label="Име" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="outlined-basic" label="Фамилия" variant="outlined" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField id="outlined-basic" label="Телефон" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="outlined-basic" label="Булстат" variant="outlined" />
                        </Grid>

                    </Grid>
                </FormControl>
            </Box>

            <Box width="55%" border={1} p={3} m={3}>
                <FormControl fullWidth={true}>
                    <Grid container >

                        <Grid item xs={12} sm={6} p={0} style={{ padding: "0px" }} >
                            <Container style={{ padding: "0px" }}>

                                <Box mt={2} pl={3} mb={3}>
                                    <Grid container spacing={4}>
                                        <Grid item >
                                            <TextField id="outlined-basic" label="Град/село" variant="outlined" />
                                        </Grid>

                                        <Grid
                                            container
                                            direction="row"
                                            justify="center"
                                            alignItems="center"
                                            spacing={1}
                                        >

                                            <Grid item xs={8}>
                                                <TextField id="outlined-basic" label="Улица" variant="outlined" />
                                            </Grid>
                                            <Grid item xs={3}>
                                                <TextField id="outlined-basic" label="№" variant="outlined" />
                                            </Grid>
                                        </Grid>
                                        <Grid item >
                                            <TextField id="outlined-basic" label="Доп. инфо" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Container>
                        </Grid>

                        <Grid item xs={12} sm={6} p={0} style={{ padding: "0px" }} >
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                spacing={1}
                            >

                                <Grid item xs={8}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Date picker inline"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>

                            <Grid item xs ={8}>
                                <Box mt={2} >
                                    <TextField id="outlined-basic" label="Статус" variant="outlined" />
                                </Box>
                            </Grid>

                        </Grid>
                    </Grid>
                </FormControl>
            </Box>
        </Container>


    );
}

export default PlaceOrderForm;