import React,{useState, useEffect} from 'react';
import Head from 'next/head';

import DetailsCards from '../../compontents/Dashboard/DetailsCards';
import AdminAddData from '../../compontents/Dashboard/AdminAddData';
import { getAllArticles } from '@components/Dashboard/services/ArticlesDataService';
import {getAllEvents} from '@components/Dashboard/services/EventsDataService';

import {
  adminPageContent,
  hugeCardDetails,
} from '../../data/admin';
import Wrapper from '../../compontents/Dashboard/Layouts/Wrapper';
import StatisticNumbers from '../../compontents/Dashboard/StatisticNumbers';

export default function componentName() {
  const [articles, setArticles ]= useState(0)
  const [events, setEvents ]= useState(0)
  const [statisticNumbers, setStatisticNumbers] = useState([])

  async function fetchArticles() {
    

    try {
      const data = await getAllArticles();
      setArticles(data.count)

    } catch (error) {
      console.error(error);
    }
  }

  async function fetchEvents() {
    try {
      const data = await getAllEvents();
      setEvents(data.count);    
          
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    
    fetchArticles()
    fetchEvents()
  
    setStatisticNumbers([
      {
        title: 'Articles',
        number: articles,
        cardSize: 'col-6 col-md-3',
        bg: 'bg-card-gold',
      },
      {
        title: 'Events',
        number: events,
        cardSize: 'col-6 col-md-3',
        bg: 'bg-card-dark',
      }
    ])
  }, [articles, events])

// export const adminPageContent = [
//   {
//     cardSize: 'col-12 col-md-4',
//     detailTitle: 'All coffeeshops',
//     contents: [
//       { name: 'Cafe Iwacu', location: 'Kigali', url: '/dashboard/coffee-shop' },
//       { name: 'Cafe Umuco', location: 'Kigali', url: '/dashboard/coffee-shop' },
//       { name: 'Cafe Umuco', location: 'Kigali', url: '/dashboard/coffee-shop' },
//     ],
//     moreDetailsLink: '/dashboard/reports/coffeeshops',
//   },
//   {
//     cardSize: 'col-12 col-md-8',
//     detailTitle: 'All articles',
//     contents: [
//       {
//         title: 'RWANDAN COFFEE RANKED AMONG THE BEST...',
//         'date posted': 'Thursday 24th May 2021',
//         url: '/article',
//       },
//       {
//         title: 'RWANDA CELEBRATES INTERNATIONAL COFFEE...',
//         'date posted': 'Thursday 24th May 2021',
//         url: '/article',
//       },
//       {
//         title: 'CHINESE AMBASSADOR PLEDGES MARKET FOR...',
//         'date posted': 'Thursday 24th May 2021',
//         url: '/article',
//       },
//     ],
//     moreDetailsLink: '/dashboard/reports/articles',
//   },
//   {
//     cardSize: 'col-12 col-md-6',
//     detailTitle: 'All orders',
//     contents: [
//       { name: 'RWANDAN COFFEE', location: 'Kigali', url: '/' },
//       { name: 'RWANDA CELEBRAT', location: 'Kigali', url: '/' },
//       { name: 'CHINESE AMBASSA', location: 'Kigali', url: '/' },
//     ],
//     moreDetailsLink: '/',
//   },
//   {
//     cardSize: 'col-12 col-md-6',
//     detailTitle: 'All events',
//     contents: [
//       { name: 'RWANDAN COFFEE', location: 'Kigali', url: '/event/' },
//       { name: 'RWANDA CELEBRAT', location: 'Kigali', url: '/event/' },
//       { name: 'CHINESE AMBASSA', location: 'Kigali', url: '/event/' },
//     ],
//     moreDetailsLink: '/dashboard/reports/events',
//   },
//   {
//     cardSize: 'col-12 col-md-4',
//     detailTitle: 'All Coffee roasters',
//     contents: [
//       { name: 'Cafe Iwacu', location: 'Kigali', url: '/dashboard/coffee-shop' },
//       { name: 'Cafe Umuco', location: 'Kigali', url: '/dashboard/coffee-shop' },
//       { name: 'Cafe Umuco', location: 'Kigali', url: '/dashboard/coffee-shop' },
//     ],
//     moreDetailsLink: '/institutions',
//   },
//   {
//     cardSize: 'col-12 col-md-4',
//     detailTitle: 'All Coffee exporters',
//     contents: [
//       {
//         name: 'Cafe Iwacu',
//         location: 'Kigali',
//         url: '/dashboard/coffee-shop',
//       },
//       {
//         name: 'Cafe Umuco',
//         location: 'Kigali',
//         url: '/dashboard/coffee-shop',
//       },
//       {
//         name: 'Cafe Umuco',
//         location: 'Kigali',
//         url: '/dashboard/coffee-shop',
//       },
//     ],
//     moreDetailsLink: '/institutions',
//   },
//   {
//     cardSize: 'col-12 col-md-4',
//     detailTitle: 'All coffeeshops',
//     contents: [
//       { name: 'Cafe Iwacu', location: 'Kigali', url: '/coffeeshop' },
//       { name: 'Cafe Umuco', location: 'Kigali', url: '/coffeeshop' },
//       { name: 'Cafe Umuco', location: 'Kigali', url: '/coffeeshop' },
//     ],
//     moreDetailsLink: '/dashboard/reports/coffeeshops',
//   },
// ];


  
  return (
    <Wrapper>
      <StatisticNumbers data={statisticNumbers} />
      <DetailsCards data={adminPageContent} />
      <DetailsCards data={hugeCardDetails} isHuge={true} />
      <AdminAddData />
    </Wrapper>
  );
}
