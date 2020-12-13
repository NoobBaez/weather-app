import React from 'react';

const icons = {
    Clouds: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><path fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z" /><animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0" /></g></svg>),
    Clear: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><path fill="#f4a71d" d="M32 23.36A8.64 8.64 0 1123.36 32 8.66 8.66 0 0132 23.36m0-3A11.64 11.64 0 1043.64 32 11.64 11.64 0 0032 20.36z" /><path fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M32 15.71V9.5M32 54.5v-6.21M43.52 20.48l4.39-4.39M16.09 47.91l4.39-4.39M20.48 20.48l-4.39-4.39M47.91 47.91l-4.39-4.39M15.71 32H9.5M54.5 32h-6.21" /><animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate" /></g></svg>),
    Drizzle: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><clipPath id="a"><path fill="none" d="M42 64l2.85-17h-23.8L17 64" /></clipPath></defs><g clip-path="url(#a)"><g><path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M32.08 49.01l-.16.98" /><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="translate" values="2 -10; -2 10" /><animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="1;1;0" /></g><g><path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M26.08 49.01l-.16.98" /><animateTransform attributeName="transform" begin="-0.5s" dur="1.5s" repeatCount="indefinite" type="translate" values="2 -10; -2 10" /><animate attributeName="opacity" begin="-0.5s" dur="1.5s" repeatCount="indefinite" values="1;1;0" /></g><g><path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.08 49.01l-.16.98" /><animateTransform attributeName="transform" begin="-1s" dur="1.5s" repeatCount="indefinite" type="translate" values="2 -10; -2 10" /><animate attributeName="opacity" begin="-1s" dur="1.5s" repeatCount="indefinite" values="1;1;0" /></g></g><path fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z" /></svg>),
    Rain: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><clipPath id="a"><path fill="none" d="M42 64l2.85-17h-23.8L17 64" /></clipPath></defs><g clip-path="url(#a)"><g><path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.52 49.05l-1.04 5.9" /><animateTransform attributeName="transform" dur="0.5s" repeatCount="indefinite" type="translate" values="2 -10; -2 10" /><animate attributeName="opacity" dur="0.5s" repeatCount="indefinite" values="1;1;0" /></g><g><path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.52 49.05l-1.04 5.9" /><animateTransform attributeName="transform" begin="-0.3s" dur="0.5s" repeatCount="indefinite" type="translate" values="2 -10; -2 10" /><animate attributeName="opacity" begin="-0.3s" dur="0.5s" repeatCount="indefinite" values="1;1;0" /></g><g><path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.52 49.05l-1.04 5.9" /><animateTransform attributeName="transform" begin="-0.1s" dur="0.5s" repeatCount="indefinite" type="translate" values="2 -10; -2 10" /><animate attributeName="opacity" begin="-0.1s" dur="0.5s" repeatCount="indefinite" values="1;1;0" /></g></g><path fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z" /></svg>),
    Snow: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><clipPath id="a"><path fill="none" d="M21.17 46.81L18 64h24l2.75-17.19H21.17z" /></clipPath></defs><g clip-path="url(#a)"><g><g><g><path fill="#72b8d4" d="M32.29 47.2l.29.82a.29.29 0 00.41.17l.79-.37a.3.3 0 01.4.4l-.37.79a.29.29 0 00.17.41l.82.29a.31.31 0 010 .58l-.82.29a.29.29 0 00-.17.41l.37.79a.3.3 0 01-.4.4l-.78-.37a.29.29 0 00-.41.17l-.29.82a.31.31 0 01-.58 0l-.3-.8a.29.29 0 00-.41-.17l-.79.37a.3.3 0 01-.4-.4l.37-.79a.29.29 0 00-.17-.41l-.82-.29a.31.31 0 010-.58l.82-.29a.29.29 0 00.17-.41l-.37-.79a.3.3 0 01.4-.4l.79.37a.29.29 0 00.41-.17l.29-.82a.31.31 0 01.58-.02z" /><animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 32 50; 180 32 50; 360 32 50" /></g><animateTransform attributeName="transform" dur="3s" repeatCount="indefinite" type="translate" values="-3 0; 3 0" /></g><animateTransform attributeName="transform" dur="3s" repeatCount="indefinite" type="translate" values="2 -6; -2 12" /><animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="1;1;1;0" /></g><g><g><g><path fill="#72b8d4" d="M39.29 47.2l.29.82a.29.29 0 00.41.17l.79-.37a.3.3 0 01.4.4l-.37.79a.29.29 0 00.17.41l.82.29a.31.31 0 010 .58l-.82.29a.29.29 0 00-.17.41l.37.79a.3.3 0 01-.4.4l-.78-.37a.29.29 0 00-.41.17l-.29.82a.31.31 0 01-.58 0l-.3-.8a.29.29 0 00-.41-.17l-.79.37a.3.3 0 01-.4-.4l.37-.79a.29.29 0 00-.17-.41l-.82-.29a.31.31 0 010-.58l.82-.29a.29.29 0 00.17-.41l-.37-.79a.3.3 0 01.4-.4l.79.37a.29.29 0 00.41-.17l.29-.82a.31.31 0 01.58-.02z" /><animateTransform attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 39 50; 180 39 50; 360 39 50" /></g><animateTransform attributeName="transform" begin="-1s" dur="3s" repeatCount="indefinite" type="translate" values="0 0; 3 0" /></g><animateTransform attributeName="transform" begin="-1s" dur="3s" repeatCount="indefinite" type="translate" values="2 -6; -2 12" /><animate attributeName="opacity" begin="-1s" dur="3s" repeatCount="indefinite" values="1;1;1;0" /></g><g><g><g><path fill="#72b8d4" d="M25.29 47.2l.29.82a.29.29 0 00.41.17l.79-.37a.3.3 0 01.4.4l-.37.79a.29.29 0 00.17.41l.82.29a.31.31 0 010 .58l-.82.29a.29.29 0 00-.17.41l.37.79a.3.3 0 01-.4.4l-.78-.37a.29.29 0 00-.41.17l-.29.82a.31.31 0 01-.58 0l-.3-.8a.29.29 0 00-.41-.17l-.79.37a.3.3 0 01-.4-.4l.37-.79a.29.29 0 00-.17-.41l-.82-.29a.31.31 0 010-.58l.82-.29a.29.29 0 00.17-.41l-.37-.79a.3.3 0 01.4-.4l.79.37a.29.29 0 00.41-.17l.29-.82a.31.31 0 01.58-.02z" /><animateTransform attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 25 50; 180 25 50; 360 25 50" /></g><animateTransform attributeName="transform" begin="-1.5s" dur="3s" repeatCount="indefinite" type="translate" values="-3 0; 2 0" /></g><animateTransform attributeName="transform" begin="-1.5s" dur="3s" repeatCount="indefinite" type="translate" values="2 -6; -2 12" /><animate attributeName="opacity" begin="-1.5s" dur="3s" repeatCount="indefinite" values="1;1;1;0" /></g></g><path fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z" /></svg>),
    Tornado: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><path fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 20h30" /><animateTransform attributeName="transform" dur="3s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0" /></g><g><path fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M19 26h26" /><animateTransform attributeName="transform" begin="-0.2s" dur="3s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0" /></g><g><path fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M21.5 32h21" /><animateTransform attributeName="transform" begin="-0.4s" dur="3s" repeatCount="indefinite" type="translate" values="-5 0; 5 0; -5 0" /></g><g><path fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M24 38h16" /><animateTransform attributeName="transform" begin="-0.6s" dur="3s" repeatCount="indefinite" type="translate" values="-6 0; 6 0; -6 0" /></g><g><path fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M28 44h8" /><animateTransform attributeName="transform" begin="-0.8s" dur="3s" repeatCount="indefinite" type="translate" values="-7 0; 7 0; -7 0" /></g></svg>),
    Thunderstorm: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="none" stroke="#efefef" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M41.5 45.5h5a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h3" /><g><path fill="#f4a71d" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z" /><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1" /></g></svg>),
    Mist: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><path fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 25h30" /><animateTransform attributeName="transform" begin="0s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0" /></g><g><path fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 32h30" /><animateTransform attributeName="transform" begin="-2s" dur="5s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0" /></g><g><path fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 39h30" /><animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0" /></g></svg>)
}

const WeatherIcons = ({ weather }) => {
    return (
        <div id="icon">
            {icons[weather] || icons['Clear']}
        </div>
    );
};

export default WeatherIcons;