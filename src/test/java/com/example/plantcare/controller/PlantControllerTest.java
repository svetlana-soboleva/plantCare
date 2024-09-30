package com.example.plantcare.controller;

import com.example.plantcare.model.Plant;
import com.example.plantcare.service.PlantService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(PlantController.class)
class PlantControllerTest {



    @Autowired
    private MockMvc mvc;

    @MockBean
    private PlantService plantService;

    private static final Plant MOCK_PLANT = new Plant.PlantBuilder("Monstera", "Tropical", "Bedroom", 7).build();
    private static final List<Plant> MOCK_PLANT_LIST = Arrays.asList(
            new Plant.PlantBuilder("Monstera", "Tropical", "Bedroom", 7).build(),
            new Plant.PlantBuilder("Crown of thorns", "Tropical", "Kitchen", 10).build()
    );

    @Test
    void shouldReturnMockedListOnRequest() throws Exception {

        Mockito.when(plantService.getAllPlants()).thenReturn(MOCK_PLANT_LIST);

        mvc.perform(get("/api/plants"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()", Matchers.is(MOCK_PLANT_LIST.size())))
                .andExpect(jsonPath("$[0].name", Matchers.is("Monstera")))
                .andExpect(jsonPath("$[1].name", Matchers.is("Crown of thorns")));
    }

}