import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import {
  TechRadarApi,
  TechRadarLoaderResponse,
} from '@backstage/plugin-tech-radar';

export class MyOwnClient implements TechRadarApi {
  async load(id: string | undefined): Promise<TechRadarLoaderResponse> {
    // Read YAML file from local path
    const response = await fetch('/custom-tech-radar-data.yaml');
    const text = await response.text();

    // Parse YAML to JavaScript object
    const data: TechRadarLoaderResponse = yaml.load(text) as TechRadarLoaderResponse;
    
    console.log("Data fetched and parsed: ", data);
    // Transform timeline dates into date objects
    return {
      ...data,
      entries: data.entries.map((entry) => ({
        ...entry,
        timeline: entry.timeline.map(timeline => ({
          ...timeline,
          date: new Date(timeline.date),
        })),
      })),
    };
  }
}
