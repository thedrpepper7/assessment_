# assessment_
HTML CSS Assessment


GRAYSCALE PARTNERS:
add triangles to clients


OUR SERVICES:
icons to the popup text

CYBER SECURITY:
add gradient 

add colors to the popout menu icons



FIX CLIENTS, BEFORE IT WAS GRID NOW IT NEEDS TO BE FLEX, WAS CAUSING OVERFLOW

footer - DONE
clients - carousel effect to be added in javascript review (DONE tho)
latest news - 
about - 
accreditations - 
service cards - 
banner - 
navigation - 
header - 
structure - 

if all else fails -

@import 'effects.scss';
@use 'mixins';

#mainnav {
    background-color: #333645;
    position: relative;
}

#nav_comp, #nav_monitor, #nav_stats, #nav_phone, #nav_web, #nav_shield, #nav_hat {
    font-size: large;
    text-align: center;
    color:white;
    font-family: 'icomoon';
}

#navcontainer {
    display: flex;
    max-height: 99px;
    @include center;
    position: relative;
    justify-content:center ;
}

#navcontainer a {
    text-decoration:none;
}

.lightpoppins, .heavypoppins {
    text-align: center;
    line-height: .75em;
    font-family: 'Poppins', sans-serif;
    color:white;
}

.lightpoppins {
    font-size:x-small;
    font-weight: 500;
}

.heavypoppins {
    font-size: medium;
    font-weight: 500;
}

.flexnav {
    padding:0 40px;
    height: 110px;
    line-height: 1;
    font-size: 1.125rem;
}

@media (max-width:1200px) {
    #mainnav {
        display: none;
    }
}

.icomoon {
    font-family: 'icomoon';
}


#nav_comp::after {
    content: "\e957";
    color: #526781;
}

#nav_monitor::after {
    content: "\e956";
    color: #286abd;
}

#nav_stats::after {
    content:  "\e99d";
    color: #25a25a;
}

#nav_phone::after {
    content: "\e942";
    color: #bc2c28;
}

#nav_web::after {
    content: "\ea80";
    color: #79539a;
}

#nav_shield::after {
    content: "\e9b4";
    color: #de093f;
}

#nav_hat::after {
    content: "\e921";
    color: #a3331d;
}

.popupheader {
    grid-column: 1 / -1;
    font-size: 1.2rem;
}

.nav_pop_up {
    @include popup;
}


#nav_background_bespoke, #nav_background_it, #nav_background_marketing, #nav_background_telecoms, #nav_background_web_design, #nav_background_cyber_security, #nav_background_developer_course {
    position: absolute;
    top: 100%; 
    left: 0;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: -1;
    color:white;
    
}


#nav_background_bespoke {
    background-color: #526781;
}

#nav_background_it {
    background-color: #286abd;
}

#nav_background_marketing {
    background-color: #25a25a;
}

#nav_background_telecoms {
    background-color: #bc2c28;
}

#nav_background_web_design {
    background-color: #79539a;
}

#nav_background_cyber_security {
    background-color: #de093f;
}

#nav_background_developer_course {
    background-color: #a3331d
}

// bespoke

#hover_bespoke:hover {
    #nav_bespoke {
        background-color: #526781;
    }
    .bespoke_square {
        background-color: red;
    }

    #nav_comp::after {
        color: white;
    }
}

#hover_bespoke:hover #nav_background_bespoke {
   @include visible;
}

// it support

#hover_support:hover {
    #nav_itsup {
        background-color: #286abd;
    }

    #nav_monitor::after {
        color:white;
    }
}

#hover_support:hover #nav_background_it {
    @include visible;
}

// digital marketing

#hover_marketing:hover {
    #nav_digitalm {
        background-color: #25a25a;
    }

    #nav_stats::after {
        color:white;
    }
}

#hover_marketing:hover #nav_background_marketing{
    @include visible;
}

// telecoms

#hover_telecoms:hover {
    #nav_telecoms {
        background-color: #bc2c28;
    }

    #nav_phone::after {
        color:white;
    }
}

#hover_telecoms:hover #nav_background_telecoms{
    @include visible;
}

// web design

#hover_web_design:hover {
    #nav_webdesign {
        background-color: #79539a;
    }

    #nav_web::after {
        color:white;
    }
}

#hover_web_design:hover #nav_background_web_design{
    @include visible;
}

// cyber security

#hover_cyber_security:hover {
    #nav_cybersecurity {
        background-color: #de093f;
    }

    #nav_shield::after {
        color:white;
    }
}

#hover_cyber_security:hover #nav_background_cyber_security{
    @include visible;
}

// developer course

#hover_developer_course:hover {
    #nav_developer {
        background-color: #a3331d
    }

    #nav_hat::after {
        color:white;
    }
}

#hover_developer_course:hover #nav_background_developer_course {
    @include visible;
}
