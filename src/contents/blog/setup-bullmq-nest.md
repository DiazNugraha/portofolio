# Setup BullMQ Nest Js

1. add processor ex: ReportsProcessor
   create reports.processor.ts

```

@Processor(’reports’)
export class ReportsProcessor {
  @Process(’transcode’)
  async transcode(job: Job<any>){
    // queue task
  }
}

```

1. import BullModule and Processor

```

imports: [
  // import BullModule
  BullModule.forRoot({
    redis: { host: ‘localhost’, port: 6379 }
  })

  // register queue
  BullModule.registerQueue({
    name: ‘reports’,
    processors: [join(__dirname, ‘reports.processor.js’)] // file location after compiled ( inside dis )
  })
],
providers: [ ReportsProcessor ]

```

1. Inject queue into service
   add `@InjectQueue(’reports’) private readonly reportsQueue: Queue` // reports is the name of the processor’s name

2. send data to queue

````

await this.reportsQueue.add(’transcode’, {
  file: ‘anything’
})

```%
````
