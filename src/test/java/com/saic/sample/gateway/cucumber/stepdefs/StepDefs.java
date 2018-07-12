package com.saic.sample.gateway.cucumber.stepdefs;

import com.saic.sample.gateway.JHipsterSampleGatewayApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = JHipsterSampleGatewayApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
