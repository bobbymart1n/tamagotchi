import { pet } from './tama-pet.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {
  $("#startPet").submit(function(event) {
    event.preventDefault();
    let newPet = pet;
    $(this).hide();
    $(".pet-container").show();
    $("#age span").text(newPet.age);
    $.ajax({
      url: `http://api.giphy.com/v1/gifs/CjrB9Mo0o4DNC?api_key=${process.env.API_KEY}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(res) {
        console.log(res);
        $("#playfullness").append(`<img src=${res.data.url}>`)
      }
    });
  });
});
