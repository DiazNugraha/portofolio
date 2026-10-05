# Setup BullMQ Nest Js

1. add processor example: ReportsProcessor.
   - create file reports.processor.ts

```jsx
@Processor(’reports’)
export class ReportsProcessor {
  @Process(’transcode’)
  async transcode(job: Job<any>){
    // queue task
  }
}
```

2. import BullModule and Processor.

```jsx
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

3. Inject queue into service.
   add this:

```jsx
@InjectQueue(’reports’) private readonly reportsQueue: Queue`
```

"reports" is the name of the processor’s name.

4. send data to queue.

```jsx
await this.reportsQueue.add(’transcode’, {
  file: ‘anything’
})
```
