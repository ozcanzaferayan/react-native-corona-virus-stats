import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  View,
  Platform,
} from 'react-native';
import Svg, { SvgUri, Circle, Rect, Image, Defs, ClipPath, Path, G, RadialGradient, Stop, Ellipse, Polygon, Text as Textt } from 'react-native-svg';
import * as cheerio from 'cheerio';

import { getMainNumbers, getActiveCases, getClosedCases, getActiveCasesGraphData, getClosedCasesGraphData, getTotalCasesGraphData, getTotalDeathsGraphData, getCountriesTableData } from './Api';
import { MainNumbers, ActiveCases, ClosedCases, ActiveCasesGraphData, ClosedCasesGraphData, TotalCasesGraphData, TotalDeathsGraphData, CountryData } from './Types';

export function App() {
  const [mainNumbers, setMainNumbers] = useState<MainNumbers>({});
  const [activeCases, setActiveCases] = useState<ActiveCases>({});
  const [closedCases, setClosedCases] = useState<ClosedCases>({});
  const [activeCasesGraphData, setActiveCasesGraphData] = useState<ActiveCasesGraphData>({});
  const [closedCasesGraphData, setClosedCasesGraphData] = useState<ClosedCasesGraphData>({});
  const [totalCasesGraphData, setTotalCasesGraphData] = useState<TotalCasesGraphData>({});
  const [totalDeathsGraphData, setTotalDeathsGraphData] = useState<TotalDeathsGraphData>({});
  const [countriesTableData, setCountriesTableData] = useState<CountryData[]>([]);

  const urlCors = 'https://cors-anywhere.herokuapp.com/';
  const urlWorldOMeter = 'https://www.worldometers.info/coronavirus/';

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    fetch(Platform.OS === 'web' ? urlCors + urlWorldOMeter: urlWorldOMeter)
      .then((response) => response.text())
      .then((data) => {
        const html = cheerio.load(data);
        setMainNumbers(getMainNumbers(html));
        setActiveCases(getActiveCases(html));
        setClosedCases(getClosedCases(html));
        setActiveCasesGraphData(getActiveCasesGraphData(html));
        setClosedCasesGraphData(getClosedCasesGraphData(html));
        setTotalCasesGraphData(getTotalCasesGraphData(html));
        setTotalDeathsGraphData(getTotalDeathsGraphData(html));
        setCountriesTableData(getCountriesTableData(html));
      })
      .catch((err) => console.warn('Something went wrong.', err));
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Text>Vaka adedi: {mainNumbers.coronavirusCases}</Text>
          <Text>Ölüm sayısı: {mainNumbers.deaths}</Text>
          <Text>İyileşen sayısı: {mainNumbers.recovered}</Text>
          <Text>Aktif vakalar</Text>
          <Text>Mevcut bulaşmış vaka adedi: {activeCases.currentlyInfectedPatients}</Text>
          <Text>Hafif seyreden adet: {activeCases.inMildCondition} (%{activeCases.inMildConditionPercent})</Text>
          <Text>Ciddi seyreden adet: {activeCases.seriousOrCritical} (%{activeCases.seriousOrCriticalPercent})</Text>
          <Text>Grafik verisi: {JSON.stringify(activeCasesGraphData).substring(0, 50)}...</Text>
          <Text>Sonuçlanan vakalar</Text>
          <Text>Sonuçlanan vaka adedi: {closedCases.casesWhichHadAnOutcome}</Text>
          <Text>İyileşen adet: {closedCases.recoveredDischarged} (%{closedCases.recoveredDischargedPercent})</Text>
          <Text>Ölüm adet: {closedCases.deaths} (%{closedCases.deathsPercent})</Text>
          <Text>Grafik verisi: {JSON.stringify(closedCasesGraphData).substring(0, 50)}...</Text>
          <Text>Toplam vakalar</Text>
          <Text>Grafik verisi: {JSON.stringify(totalCasesGraphData).substring(0, 50)}...</Text>
          <Text>Ölüm ölümler</Text>
          <Text>Grafik verisi: {JSON.stringify(totalDeathsGraphData).substring(0, 50)}...</Text>
          <Text>Ülke Listesi</Text>
          <FlatList
            data={countriesTableData}
            keyExtractor={(item) => item.country!}
            ListHeaderComponent={() =>
              <View style={{ flexDirection: 'row' }}>
              <Text>|Ülke|</Text>
              <Text>Tüm vakalar|</Text>
              <Text>Yeni vakalar|</Text>
              <Text>Toplam ölümler|</Text>
              <Text>Yeni ölümler|</Text>
              <Text>Toplam iyileşenler|</Text>
              <Text>Aktif vakalar|</Text>
              <Text>Kritik vakalar|</Text>
              <Text>Toplam vakalar/1M|</Text>
              </View>
            }
            renderItem={({ item }) =>
              <View style={{ flexDirection: 'row' }}>
                <Text>|{item.country}|</Text>
                <Text>{item.totalCases}|</Text>
                <Text>{item.newCases}|</Text>
                <Text>{item.totalDeaths}|</Text>
                <Text>{item.newDeaths}|</Text>
                <Text>{item.totalRecovered}|</Text>
                <Text>{item.activeCases}|</Text>
                <Text>{item.criticalCases}|</Text>
                <Text>{item.totalCasesIn1m}|</Text>
              </View>
            }
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};